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
export var GetBuiltinSlotTypesLocaleEnum;
(function (GetBuiltinSlotTypesLocaleEnum) {
    GetBuiltinSlotTypesLocaleEnum["DeDe"] = "de-DE";
    GetBuiltinSlotTypesLocaleEnum["EnAu"] = "en-AU";
    GetBuiltinSlotTypesLocaleEnum["EnGb"] = "en-GB";
    GetBuiltinSlotTypesLocaleEnum["EnIn"] = "en-IN";
    GetBuiltinSlotTypesLocaleEnum["EnUs"] = "en-US";
    GetBuiltinSlotTypesLocaleEnum["Es419"] = "es-419";
    GetBuiltinSlotTypesLocaleEnum["EsEs"] = "es-ES";
    GetBuiltinSlotTypesLocaleEnum["EsUs"] = "es-US";
    GetBuiltinSlotTypesLocaleEnum["FrFr"] = "fr-FR";
    GetBuiltinSlotTypesLocaleEnum["FrCa"] = "fr-CA";
    GetBuiltinSlotTypesLocaleEnum["ItIt"] = "it-IT";
    GetBuiltinSlotTypesLocaleEnum["JaJp"] = "ja-JP";
    GetBuiltinSlotTypesLocaleEnum["KoKr"] = "ko-KR";
})(GetBuiltinSlotTypesLocaleEnum || (GetBuiltinSlotTypesLocaleEnum = {}));
var GetBuiltinSlotTypesQueryParams = /** @class */ (function (_super) {
    __extends(GetBuiltinSlotTypesQueryParams, _super);
    function GetBuiltinSlotTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], GetBuiltinSlotTypesQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GetBuiltinSlotTypesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetBuiltinSlotTypesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signatureContains" }),
        __metadata("design:type", String)
    ], GetBuiltinSlotTypesQueryParams.prototype, "signatureContains", void 0);
    return GetBuiltinSlotTypesQueryParams;
}(SpeakeasyBase));
export { GetBuiltinSlotTypesQueryParams };
var GetBuiltinSlotTypesHeaders = /** @class */ (function (_super) {
    __extends(GetBuiltinSlotTypesHeaders, _super);
    function GetBuiltinSlotTypesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetBuiltinSlotTypesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetBuiltinSlotTypesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetBuiltinSlotTypesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetBuiltinSlotTypesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetBuiltinSlotTypesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetBuiltinSlotTypesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetBuiltinSlotTypesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetBuiltinSlotTypesHeaders;
}(SpeakeasyBase));
export { GetBuiltinSlotTypesHeaders };
var GetBuiltinSlotTypesRequest = /** @class */ (function (_super) {
    __extends(GetBuiltinSlotTypesRequest, _super);
    function GetBuiltinSlotTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBuiltinSlotTypesQueryParams)
    ], GetBuiltinSlotTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBuiltinSlotTypesHeaders)
    ], GetBuiltinSlotTypesRequest.prototype, "headers", void 0);
    return GetBuiltinSlotTypesRequest;
}(SpeakeasyBase));
export { GetBuiltinSlotTypesRequest };
var GetBuiltinSlotTypesResponse = /** @class */ (function (_super) {
    __extends(GetBuiltinSlotTypesResponse, _super);
    function GetBuiltinSlotTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBuiltinSlotTypesResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBuiltinSlotTypesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetBuiltinSlotTypesResponse)
    ], GetBuiltinSlotTypesResponse.prototype, "getBuiltinSlotTypesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBuiltinSlotTypesResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBuiltinSlotTypesResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBuiltinSlotTypesResponse.prototype, "statusCode", void 0);
    return GetBuiltinSlotTypesResponse;
}(SpeakeasyBase));
export { GetBuiltinSlotTypesResponse };
