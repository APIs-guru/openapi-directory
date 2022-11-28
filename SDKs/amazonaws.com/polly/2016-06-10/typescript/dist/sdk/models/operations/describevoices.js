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
export var DescribeVoicesEngineEnum;
(function (DescribeVoicesEngineEnum) {
    DescribeVoicesEngineEnum["Standard"] = "standard";
    DescribeVoicesEngineEnum["Neural"] = "neural";
})(DescribeVoicesEngineEnum || (DescribeVoicesEngineEnum = {}));
export var DescribeVoicesLanguageCodeEnum;
(function (DescribeVoicesLanguageCodeEnum) {
    DescribeVoicesLanguageCodeEnum["Arb"] = "arb";
    DescribeVoicesLanguageCodeEnum["CmnCn"] = "cmn-CN";
    DescribeVoicesLanguageCodeEnum["CyGb"] = "cy-GB";
    DescribeVoicesLanguageCodeEnum["DaDk"] = "da-DK";
    DescribeVoicesLanguageCodeEnum["DeDe"] = "de-DE";
    DescribeVoicesLanguageCodeEnum["EnAu"] = "en-AU";
    DescribeVoicesLanguageCodeEnum["EnGb"] = "en-GB";
    DescribeVoicesLanguageCodeEnum["EnGbWls"] = "en-GB-WLS";
    DescribeVoicesLanguageCodeEnum["EnIn"] = "en-IN";
    DescribeVoicesLanguageCodeEnum["EnUs"] = "en-US";
    DescribeVoicesLanguageCodeEnum["EsEs"] = "es-ES";
    DescribeVoicesLanguageCodeEnum["EsMx"] = "es-MX";
    DescribeVoicesLanguageCodeEnum["EsUs"] = "es-US";
    DescribeVoicesLanguageCodeEnum["FrCa"] = "fr-CA";
    DescribeVoicesLanguageCodeEnum["FrFr"] = "fr-FR";
    DescribeVoicesLanguageCodeEnum["IsIs"] = "is-IS";
    DescribeVoicesLanguageCodeEnum["ItIt"] = "it-IT";
    DescribeVoicesLanguageCodeEnum["JaJp"] = "ja-JP";
    DescribeVoicesLanguageCodeEnum["HiIn"] = "hi-IN";
    DescribeVoicesLanguageCodeEnum["KoKr"] = "ko-KR";
    DescribeVoicesLanguageCodeEnum["NbNo"] = "nb-NO";
    DescribeVoicesLanguageCodeEnum["NlNl"] = "nl-NL";
    DescribeVoicesLanguageCodeEnum["PlPl"] = "pl-PL";
    DescribeVoicesLanguageCodeEnum["PtBr"] = "pt-BR";
    DescribeVoicesLanguageCodeEnum["PtPt"] = "pt-PT";
    DescribeVoicesLanguageCodeEnum["RoRo"] = "ro-RO";
    DescribeVoicesLanguageCodeEnum["RuRu"] = "ru-RU";
    DescribeVoicesLanguageCodeEnum["SvSe"] = "sv-SE";
    DescribeVoicesLanguageCodeEnum["TrTr"] = "tr-TR";
    DescribeVoicesLanguageCodeEnum["EnNz"] = "en-NZ";
    DescribeVoicesLanguageCodeEnum["EnZa"] = "en-ZA";
})(DescribeVoicesLanguageCodeEnum || (DescribeVoicesLanguageCodeEnum = {}));
var DescribeVoicesQueryParams = /** @class */ (function (_super) {
    __extends(DescribeVoicesQueryParams, _super);
    function DescribeVoicesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Engine" }),
        __metadata("design:type", String)
    ], DescribeVoicesQueryParams.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IncludeAdditionalLanguageCodes" }),
        __metadata("design:type", Boolean)
    ], DescribeVoicesQueryParams.prototype, "includeAdditionalLanguageCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LanguageCode" }),
        __metadata("design:type", String)
    ], DescribeVoicesQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeVoicesQueryParams.prototype, "nextToken", void 0);
    return DescribeVoicesQueryParams;
}(SpeakeasyBase));
export { DescribeVoicesQueryParams };
var DescribeVoicesHeaders = /** @class */ (function (_super) {
    __extends(DescribeVoicesHeaders, _super);
    function DescribeVoicesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeVoicesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeVoicesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeVoicesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeVoicesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeVoicesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeVoicesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeVoicesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeVoicesHeaders;
}(SpeakeasyBase));
export { DescribeVoicesHeaders };
var DescribeVoicesRequest = /** @class */ (function (_super) {
    __extends(DescribeVoicesRequest, _super);
    function DescribeVoicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeVoicesQueryParams)
    ], DescribeVoicesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeVoicesHeaders)
    ], DescribeVoicesRequest.prototype, "headers", void 0);
    return DescribeVoicesRequest;
}(SpeakeasyBase));
export { DescribeVoicesRequest };
var DescribeVoicesResponse = /** @class */ (function (_super) {
    __extends(DescribeVoicesResponse, _super);
    function DescribeVoicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeVoicesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeVoicesOutput)
    ], DescribeVoicesResponse.prototype, "describeVoicesOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeVoicesResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeVoicesResponse.prototype, "serviceFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeVoicesResponse.prototype, "statusCode", void 0);
    return DescribeVoicesResponse;
}(SpeakeasyBase));
export { DescribeVoicesResponse };
