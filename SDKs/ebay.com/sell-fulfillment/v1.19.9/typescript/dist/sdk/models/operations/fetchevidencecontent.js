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
export var FetchEvidenceContentServerList = [
    "https://apiz.ebay.com{basePath}",
];
var FetchEvidenceContentPathParams = /** @class */ (function (_super) {
    __extends(FetchEvidenceContentPathParams, _super);
    function FetchEvidenceContentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" }),
        __metadata("design:type", String)
    ], FetchEvidenceContentPathParams.prototype, "paymentDisputeId", void 0);
    return FetchEvidenceContentPathParams;
}(SpeakeasyBase));
export { FetchEvidenceContentPathParams };
var FetchEvidenceContentQueryParams = /** @class */ (function (_super) {
    __extends(FetchEvidenceContentQueryParams, _super);
    function FetchEvidenceContentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=evidence_id" }),
        __metadata("design:type", String)
    ], FetchEvidenceContentQueryParams.prototype, "evidenceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=file_id" }),
        __metadata("design:type", String)
    ], FetchEvidenceContentQueryParams.prototype, "fileId", void 0);
    return FetchEvidenceContentQueryParams;
}(SpeakeasyBase));
export { FetchEvidenceContentQueryParams };
var FetchEvidenceContentSecurity = /** @class */ (function (_super) {
    __extends(FetchEvidenceContentSecurity, _super);
    function FetchEvidenceContentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], FetchEvidenceContentSecurity.prototype, "apiAuth", void 0);
    return FetchEvidenceContentSecurity;
}(SpeakeasyBase));
export { FetchEvidenceContentSecurity };
var FetchEvidenceContentRequest = /** @class */ (function (_super) {
    __extends(FetchEvidenceContentRequest, _super);
    function FetchEvidenceContentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchEvidenceContentRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchEvidenceContentPathParams)
    ], FetchEvidenceContentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchEvidenceContentQueryParams)
    ], FetchEvidenceContentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchEvidenceContentSecurity)
    ], FetchEvidenceContentRequest.prototype, "security", void 0);
    return FetchEvidenceContentRequest;
}(SpeakeasyBase));
export { FetchEvidenceContentRequest };
var FetchEvidenceContentResponse = /** @class */ (function (_super) {
    __extends(FetchEvidenceContentResponse, _super);
    function FetchEvidenceContentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], FetchEvidenceContentResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchEvidenceContentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchEvidenceContentResponse.prototype, "statusCode", void 0);
    return FetchEvidenceContentResponse;
}(SpeakeasyBase));
export { FetchEvidenceContentResponse };
