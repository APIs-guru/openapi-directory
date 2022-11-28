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
var CreateCatchAllPathParams = /** @class */ (function (_super) {
    __extends(CreateCatchAllPathParams, _super);
    function CreateCatchAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], CreateCatchAllPathParams.prototype, "domainName", void 0);
    return CreateCatchAllPathParams;
}(SpeakeasyBase));
export { CreateCatchAllPathParams };
var CreateCatchAllQueryParams = /** @class */ (function (_super) {
    __extends(CreateCatchAllQueryParams, _super);
    function CreateCatchAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" }),
        __metadata("design:type", String)
    ], CreateCatchAllQueryParams.prototype, "domainName", void 0);
    return CreateCatchAllQueryParams;
}(SpeakeasyBase));
export { CreateCatchAllQueryParams };
var CreateCatchAllRequest = /** @class */ (function (_super) {
    __extends(CreateCatchAllRequest, _super);
    function CreateCatchAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCatchAllPathParams)
    ], CreateCatchAllRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCatchAllQueryParams)
    ], CreateCatchAllRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateCatchAllRequest)
    ], CreateCatchAllRequest.prototype, "request", void 0);
    return CreateCatchAllRequest;
}(SpeakeasyBase));
export { CreateCatchAllRequest };
var CreateCatchAllResponse = /** @class */ (function (_super) {
    __extends(CreateCatchAllResponse, _super);
    function CreateCatchAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCatchAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateCatchAllResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCatchAllResponse.prototype, "statusCode", void 0);
    return CreateCatchAllResponse;
}(SpeakeasyBase));
export { CreateCatchAllResponse };
