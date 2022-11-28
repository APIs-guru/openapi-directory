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
export var GetBuiltinIntentsLocaleEnum;
(function (GetBuiltinIntentsLocaleEnum) {
    GetBuiltinIntentsLocaleEnum["DeDe"] = "de-DE";
    GetBuiltinIntentsLocaleEnum["EnAu"] = "en-AU";
    GetBuiltinIntentsLocaleEnum["EnGb"] = "en-GB";
    GetBuiltinIntentsLocaleEnum["EnIn"] = "en-IN";
    GetBuiltinIntentsLocaleEnum["EnUs"] = "en-US";
    GetBuiltinIntentsLocaleEnum["Es419"] = "es-419";
    GetBuiltinIntentsLocaleEnum["EsEs"] = "es-ES";
    GetBuiltinIntentsLocaleEnum["EsUs"] = "es-US";
    GetBuiltinIntentsLocaleEnum["FrFr"] = "fr-FR";
    GetBuiltinIntentsLocaleEnum["FrCa"] = "fr-CA";
    GetBuiltinIntentsLocaleEnum["ItIt"] = "it-IT";
    GetBuiltinIntentsLocaleEnum["JaJp"] = "ja-JP";
    GetBuiltinIntentsLocaleEnum["KoKr"] = "ko-KR";
})(GetBuiltinIntentsLocaleEnum || (GetBuiltinIntentsLocaleEnum = {}));
var GetBuiltinIntentsQueryParams = /** @class */ (function (_super) {
    __extends(GetBuiltinIntentsQueryParams, _super);
    function GetBuiltinIntentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], GetBuiltinIntentsQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GetBuiltinIntentsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetBuiltinIntentsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signatureContains" }),
        __metadata("design:type", String)
    ], GetBuiltinIntentsQueryParams.prototype, "signatureContains", void 0);
    return GetBuiltinIntentsQueryParams;
}(SpeakeasyBase));
export { GetBuiltinIntentsQueryParams };
var GetBuiltinIntentsHeaders = /** @class */ (function (_super) {
    __extends(GetBuiltinIntentsHeaders, _super);
    function GetBuiltinIntentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetBuiltinIntentsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetBuiltinIntentsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetBuiltinIntentsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetBuiltinIntentsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetBuiltinIntentsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetBuiltinIntentsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetBuiltinIntentsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetBuiltinIntentsHeaders;
}(SpeakeasyBase));
export { GetBuiltinIntentsHeaders };
var GetBuiltinIntentsRequest = /** @class */ (function (_super) {
    __extends(GetBuiltinIntentsRequest, _super);
    function GetBuiltinIntentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBuiltinIntentsQueryParams)
    ], GetBuiltinIntentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBuiltinIntentsHeaders)
    ], GetBuiltinIntentsRequest.prototype, "headers", void 0);
    return GetBuiltinIntentsRequest;
}(SpeakeasyBase));
export { GetBuiltinIntentsRequest };
var GetBuiltinIntentsResponse = /** @class */ (function (_super) {
    __extends(GetBuiltinIntentsResponse, _super);
    function GetBuiltinIntentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBuiltinIntentsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBuiltinIntentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetBuiltinIntentsResponse)
    ], GetBuiltinIntentsResponse.prototype, "getBuiltinIntentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBuiltinIntentsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBuiltinIntentsResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBuiltinIntentsResponse.prototype, "statusCode", void 0);
    return GetBuiltinIntentsResponse;
}(SpeakeasyBase));
export { GetBuiltinIntentsResponse };
