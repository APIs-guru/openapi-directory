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
var ConfigureAntiSpamPathParams = /** @class */ (function (_super) {
    __extends(ConfigureAntiSpamPathParams, _super);
    function ConfigureAntiSpamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], ConfigureAntiSpamPathParams.prototype, "domainName", void 0);
    return ConfigureAntiSpamPathParams;
}(SpeakeasyBase));
export { ConfigureAntiSpamPathParams };
var ConfigureAntiSpamQueryParams = /** @class */ (function (_super) {
    __extends(ConfigureAntiSpamQueryParams, _super);
    function ConfigureAntiSpamQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" }),
        __metadata("design:type", String)
    ], ConfigureAntiSpamQueryParams.prototype, "domainName", void 0);
    return ConfigureAntiSpamQueryParams;
}(SpeakeasyBase));
export { ConfigureAntiSpamQueryParams };
var ConfigureAntiSpamRequest = /** @class */ (function (_super) {
    __extends(ConfigureAntiSpamRequest, _super);
    function ConfigureAntiSpamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConfigureAntiSpamPathParams)
    ], ConfigureAntiSpamRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConfigureAntiSpamQueryParams)
    ], ConfigureAntiSpamRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateAntiSpamRequest)
    ], ConfigureAntiSpamRequest.prototype, "request", void 0);
    return ConfigureAntiSpamRequest;
}(SpeakeasyBase));
export { ConfigureAntiSpamRequest };
var ConfigureAntiSpamResponse = /** @class */ (function (_super) {
    __extends(ConfigureAntiSpamResponse, _super);
    function ConfigureAntiSpamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConfigureAntiSpamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConfigureAntiSpamResponse.prototype, "statusCode", void 0);
    return ConfigureAntiSpamResponse;
}(SpeakeasyBase));
export { ConfigureAntiSpamResponse };
