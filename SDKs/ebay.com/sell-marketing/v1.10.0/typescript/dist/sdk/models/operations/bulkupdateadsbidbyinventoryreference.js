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
var BulkUpdateAdsBidByInventoryReferencePathParams = /** @class */ (function (_super) {
    __extends(BulkUpdateAdsBidByInventoryReferencePathParams, _super);
    function BulkUpdateAdsBidByInventoryReferencePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" }),
        __metadata("design:type", String)
    ], BulkUpdateAdsBidByInventoryReferencePathParams.prototype, "campaignId", void 0);
    return BulkUpdateAdsBidByInventoryReferencePathParams;
}(SpeakeasyBase));
export { BulkUpdateAdsBidByInventoryReferencePathParams };
var BulkUpdateAdsBidByInventoryReferenceSecurity = /** @class */ (function (_super) {
    __extends(BulkUpdateAdsBidByInventoryReferenceSecurity, _super);
    function BulkUpdateAdsBidByInventoryReferenceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], BulkUpdateAdsBidByInventoryReferenceSecurity.prototype, "apiAuth", void 0);
    return BulkUpdateAdsBidByInventoryReferenceSecurity;
}(SpeakeasyBase));
export { BulkUpdateAdsBidByInventoryReferenceSecurity };
var BulkUpdateAdsBidByInventoryReferenceRequest = /** @class */ (function (_super) {
    __extends(BulkUpdateAdsBidByInventoryReferenceRequest, _super);
    function BulkUpdateAdsBidByInventoryReferenceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BulkUpdateAdsBidByInventoryReferencePathParams)
    ], BulkUpdateAdsBidByInventoryReferenceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BulkCreateAdsByInventoryReferenceRequest)
    ], BulkUpdateAdsBidByInventoryReferenceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BulkUpdateAdsBidByInventoryReferenceSecurity)
    ], BulkUpdateAdsBidByInventoryReferenceRequest.prototype, "security", void 0);
    return BulkUpdateAdsBidByInventoryReferenceRequest;
}(SpeakeasyBase));
export { BulkUpdateAdsBidByInventoryReferenceRequest };
var BulkUpdateAdsBidByInventoryReferenceResponse = /** @class */ (function (_super) {
    __extends(BulkUpdateAdsBidByInventoryReferenceResponse, _super);
    function BulkUpdateAdsBidByInventoryReferenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BulkCreateAdsByInventoryReferenceResponse)
    ], BulkUpdateAdsBidByInventoryReferenceResponse.prototype, "bulkCreateAdsByInventoryReferenceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BulkUpdateAdsBidByInventoryReferenceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BulkUpdateAdsBidByInventoryReferenceResponse.prototype, "statusCode", void 0);
    return BulkUpdateAdsBidByInventoryReferenceResponse;
}(SpeakeasyBase));
export { BulkUpdateAdsBidByInventoryReferenceResponse };
