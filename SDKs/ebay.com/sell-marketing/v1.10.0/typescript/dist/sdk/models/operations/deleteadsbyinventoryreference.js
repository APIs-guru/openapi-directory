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
var DeleteAdsByInventoryReferencePathParams = /** @class */ (function (_super) {
    __extends(DeleteAdsByInventoryReferencePathParams, _super);
    function DeleteAdsByInventoryReferencePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" }),
        __metadata("design:type", String)
    ], DeleteAdsByInventoryReferencePathParams.prototype, "campaignId", void 0);
    return DeleteAdsByInventoryReferencePathParams;
}(SpeakeasyBase));
export { DeleteAdsByInventoryReferencePathParams };
var DeleteAdsByInventoryReferenceSecurity = /** @class */ (function (_super) {
    __extends(DeleteAdsByInventoryReferenceSecurity, _super);
    function DeleteAdsByInventoryReferenceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], DeleteAdsByInventoryReferenceSecurity.prototype, "apiAuth", void 0);
    return DeleteAdsByInventoryReferenceSecurity;
}(SpeakeasyBase));
export { DeleteAdsByInventoryReferenceSecurity };
var DeleteAdsByInventoryReferenceRequest = /** @class */ (function (_super) {
    __extends(DeleteAdsByInventoryReferenceRequest, _super);
    function DeleteAdsByInventoryReferenceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAdsByInventoryReferencePathParams)
    ], DeleteAdsByInventoryReferenceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteAdsByInventoryReferenceRequest)
    ], DeleteAdsByInventoryReferenceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAdsByInventoryReferenceSecurity)
    ], DeleteAdsByInventoryReferenceRequest.prototype, "security", void 0);
    return DeleteAdsByInventoryReferenceRequest;
}(SpeakeasyBase));
export { DeleteAdsByInventoryReferenceRequest };
var DeleteAdsByInventoryReferenceResponse = /** @class */ (function (_super) {
    __extends(DeleteAdsByInventoryReferenceResponse, _super);
    function DeleteAdsByInventoryReferenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdIds)
    ], DeleteAdsByInventoryReferenceResponse.prototype, "adIds", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteAdsByInventoryReferenceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteAdsByInventoryReferenceResponse.prototype, "statusCode", void 0);
    return DeleteAdsByInventoryReferenceResponse;
}(SpeakeasyBase));
export { DeleteAdsByInventoryReferenceResponse };
