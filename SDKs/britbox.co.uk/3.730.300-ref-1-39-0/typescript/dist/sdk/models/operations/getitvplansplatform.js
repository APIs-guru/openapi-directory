var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var GetItvPlansPlatformPathParams = /** @class */ (function (_super) {
    __extends(GetItvPlansPlatformPathParams, _super);
    function GetItvPlansPlatformPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" }),
        __metadata("design:type", String)
    ], GetItvPlansPlatformPathParams.prototype, "platform", void 0);
    return GetItvPlansPlatformPathParams;
}(SpeakeasyBase));
export { GetItvPlansPlatformPathParams };
var GetItvPlansPlatformQueryParams = /** @class */ (function (_super) {
    __extends(GetItvPlansPlatformQueryParams, _super);
    function GetItvPlansPlatformQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetItvPlansPlatformQueryParams.prototype, "lang", void 0);
    return GetItvPlansPlatformQueryParams;
}(SpeakeasyBase));
export { GetItvPlansPlatformQueryParams };
var GetItvPlansPlatformSecurity = /** @class */ (function (_super) {
    __extends(GetItvPlansPlatformSecurity, _super);
    function GetItvPlansPlatformSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], GetItvPlansPlatformSecurity.prototype, "accountAuth", void 0);
    return GetItvPlansPlatformSecurity;
}(SpeakeasyBase));
export { GetItvPlansPlatformSecurity };
var GetItvPlansPlatformRequest = /** @class */ (function (_super) {
    __extends(GetItvPlansPlatformRequest, _super);
    function GetItvPlansPlatformRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItvPlansPlatformPathParams)
    ], GetItvPlansPlatformRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItvPlansPlatformQueryParams)
    ], GetItvPlansPlatformRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItvPlansPlatformSecurity)
    ], GetItvPlansPlatformRequest.prototype, "security", void 0);
    return GetItvPlansPlatformRequest;
}(SpeakeasyBase));
export { GetItvPlansPlatformRequest };
var GetItvPlansPlatformResponse = /** @class */ (function (_super) {
    __extends(GetItvPlansPlatformResponse, _super);
    function GetItvPlansPlatformResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetItvPlansPlatformResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ItvPlans)
    ], GetItvPlansPlatformResponse.prototype, "itvPlans", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetItvPlansPlatformResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetItvPlansPlatformResponse.prototype, "statusCode", void 0);
    return GetItvPlansPlatformResponse;
}(SpeakeasyBase));
export { GetItvPlansPlatformResponse };
