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
var PutDeliverabilityDashboardOptionHeaders = /** @class */ (function (_super) {
    __extends(PutDeliverabilityDashboardOptionHeaders, _super);
    function PutDeliverabilityDashboardOptionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutDeliverabilityDashboardOptionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutDeliverabilityDashboardOptionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutDeliverabilityDashboardOptionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutDeliverabilityDashboardOptionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutDeliverabilityDashboardOptionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutDeliverabilityDashboardOptionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutDeliverabilityDashboardOptionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutDeliverabilityDashboardOptionHeaders;
}(SpeakeasyBase));
export { PutDeliverabilityDashboardOptionHeaders };
var PutDeliverabilityDashboardOptionRequestBody = /** @class */ (function (_super) {
    __extends(PutDeliverabilityDashboardOptionRequestBody, _super);
    function PutDeliverabilityDashboardOptionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DashboardEnabled" }),
        __metadata("design:type", Boolean)
    ], PutDeliverabilityDashboardOptionRequestBody.prototype, "dashboardEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubscribedDomains", elemType: shared.DomainDeliverabilityTrackingOption }),
        __metadata("design:type", Array)
    ], PutDeliverabilityDashboardOptionRequestBody.prototype, "subscribedDomains", void 0);
    return PutDeliverabilityDashboardOptionRequestBody;
}(SpeakeasyBase));
export { PutDeliverabilityDashboardOptionRequestBody };
var PutDeliverabilityDashboardOptionRequest = /** @class */ (function (_super) {
    __extends(PutDeliverabilityDashboardOptionRequest, _super);
    function PutDeliverabilityDashboardOptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDeliverabilityDashboardOptionHeaders)
    ], PutDeliverabilityDashboardOptionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutDeliverabilityDashboardOptionRequestBody)
    ], PutDeliverabilityDashboardOptionRequest.prototype, "request", void 0);
    return PutDeliverabilityDashboardOptionRequest;
}(SpeakeasyBase));
export { PutDeliverabilityDashboardOptionRequest };
var PutDeliverabilityDashboardOptionResponse = /** @class */ (function (_super) {
    __extends(PutDeliverabilityDashboardOptionResponse, _super);
    function PutDeliverabilityDashboardOptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutDeliverabilityDashboardOptionResponse.prototype, "alreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutDeliverabilityDashboardOptionResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutDeliverabilityDashboardOptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutDeliverabilityDashboardOptionResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutDeliverabilityDashboardOptionResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutDeliverabilityDashboardOptionResponse.prototype, "putDeliverabilityDashboardOptionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutDeliverabilityDashboardOptionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutDeliverabilityDashboardOptionResponse.prototype, "tooManyRequestsException", void 0);
    return PutDeliverabilityDashboardOptionResponse;
}(SpeakeasyBase));
export { PutDeliverabilityDashboardOptionResponse };
