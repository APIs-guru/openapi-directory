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
var GetJoinDetailsMultipleQueryParams = /** @class */ (function (_super) {
    __extends(GetJoinDetailsMultipleQueryParams, _super);
    function GetJoinDetailsMultipleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=convIds" }),
        __metadata("design:type", Array)
    ], GetJoinDetailsMultipleQueryParams.prototype, "convIds", void 0);
    return GetJoinDetailsMultipleQueryParams;
}(SpeakeasyBase));
export { GetJoinDetailsMultipleQueryParams };
var GetJoinDetailsMultipleSecurity = /** @class */ (function (_super) {
    __extends(GetJoinDetailsMultipleSecurity, _super);
    function GetJoinDetailsMultipleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetJoinDetailsMultipleSecurity.prototype, "oauth", void 0);
    return GetJoinDetailsMultipleSecurity;
}(SpeakeasyBase));
export { GetJoinDetailsMultipleSecurity };
var GetJoinDetailsMultipleRequest = /** @class */ (function (_super) {
    __extends(GetJoinDetailsMultipleRequest, _super);
    function GetJoinDetailsMultipleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJoinDetailsMultipleQueryParams)
    ], GetJoinDetailsMultipleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJoinDetailsMultipleSecurity)
    ], GetJoinDetailsMultipleRequest.prototype, "security", void 0);
    return GetJoinDetailsMultipleRequest;
}(SpeakeasyBase));
export { GetJoinDetailsMultipleRequest };
var GetJoinDetailsMultipleResponse = /** @class */ (function (_super) {
    __extends(GetJoinDetailsMultipleResponse, _super);
    function GetJoinDetailsMultipleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetJoinDetailsMultipleResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetJoinDetailsMultipleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetJoinDetailsMultipleResponse.prototype, "conversationDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetJoinDetailsMultipleResponse.prototype, "statusCode", void 0);
    return GetJoinDetailsMultipleResponse;
}(SpeakeasyBase));
export { GetJoinDetailsMultipleResponse };
