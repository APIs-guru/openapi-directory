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
var BulkCreateAdsByInventoryReferencePathParams = /** @class */ (function (_super) {
    __extends(BulkCreateAdsByInventoryReferencePathParams, _super);
    function BulkCreateAdsByInventoryReferencePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" }),
        __metadata("design:type", String)
    ], BulkCreateAdsByInventoryReferencePathParams.prototype, "campaignId", void 0);
    return BulkCreateAdsByInventoryReferencePathParams;
}(SpeakeasyBase));
export { BulkCreateAdsByInventoryReferencePathParams };
var BulkCreateAdsByInventoryReferenceSecurity = /** @class */ (function (_super) {
    __extends(BulkCreateAdsByInventoryReferenceSecurity, _super);
    function BulkCreateAdsByInventoryReferenceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], BulkCreateAdsByInventoryReferenceSecurity.prototype, "apiAuth", void 0);
    return BulkCreateAdsByInventoryReferenceSecurity;
}(SpeakeasyBase));
export { BulkCreateAdsByInventoryReferenceSecurity };
var BulkCreateAdsByInventoryReferenceRequest = /** @class */ (function (_super) {
    __extends(BulkCreateAdsByInventoryReferenceRequest, _super);
    function BulkCreateAdsByInventoryReferenceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BulkCreateAdsByInventoryReferencePathParams)
    ], BulkCreateAdsByInventoryReferenceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BulkCreateAdsByInventoryReferenceRequest)
    ], BulkCreateAdsByInventoryReferenceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BulkCreateAdsByInventoryReferenceSecurity)
    ], BulkCreateAdsByInventoryReferenceRequest.prototype, "security", void 0);
    return BulkCreateAdsByInventoryReferenceRequest;
}(SpeakeasyBase));
export { BulkCreateAdsByInventoryReferenceRequest };
var BulkCreateAdsByInventoryReferenceResponse = /** @class */ (function (_super) {
    __extends(BulkCreateAdsByInventoryReferenceResponse, _super);
    function BulkCreateAdsByInventoryReferenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BulkCreateAdsByInventoryReferenceResponse)
    ], BulkCreateAdsByInventoryReferenceResponse.prototype, "bulkCreateAdsByInventoryReferenceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BulkCreateAdsByInventoryReferenceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BulkCreateAdsByInventoryReferenceResponse.prototype, "statusCode", void 0);
    return BulkCreateAdsByInventoryReferenceResponse;
}(SpeakeasyBase));
export { BulkCreateAdsByInventoryReferenceResponse };
