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
var CreateWorldGenerationJobHeaders = /** @class */ (function (_super) {
    __extends(CreateWorldGenerationJobHeaders, _super);
    function CreateWorldGenerationJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateWorldGenerationJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateWorldGenerationJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateWorldGenerationJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateWorldGenerationJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateWorldGenerationJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateWorldGenerationJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateWorldGenerationJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateWorldGenerationJobHeaders;
}(SpeakeasyBase));
export { CreateWorldGenerationJobHeaders };
// CreateWorldGenerationJobRequestBodyWorldCount
/**
 * <p>The number of worlds that will be created. You can configure the number of unique floorplans and the number of unique interiors for each floor plan. For example, if you want 1 world with 20 unique interiors, you set <code>floorplanCount = 1</code> and <code>interiorCountPerFloorplan = 20</code>. This will result in 20 worlds (<code>floorplanCount</code> * <code>interiorCountPerFloorplan)</code>. </p> <p>If you set <code>floorplanCount = 4</code> and <code>interiorCountPerFloorplan = 5</code>, there will be 20 worlds with 5 unique floor plans. </p>
**/
var CreateWorldGenerationJobRequestBodyWorldCount = /** @class */ (function (_super) {
    __extends(CreateWorldGenerationJobRequestBodyWorldCount, _super);
    function CreateWorldGenerationJobRequestBodyWorldCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floorplanCount" }),
        __metadata("design:type", Number)
    ], CreateWorldGenerationJobRequestBodyWorldCount.prototype, "floorplanCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interiorCountPerFloorplan" }),
        __metadata("design:type", Number)
    ], CreateWorldGenerationJobRequestBodyWorldCount.prototype, "interiorCountPerFloorplan", void 0);
    return CreateWorldGenerationJobRequestBodyWorldCount;
}(SpeakeasyBase));
export { CreateWorldGenerationJobRequestBodyWorldCount };
var CreateWorldGenerationJobRequestBody = /** @class */ (function (_super) {
    __extends(CreateWorldGenerationJobRequestBody, _super);
    function CreateWorldGenerationJobRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], CreateWorldGenerationJobRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateWorldGenerationJobRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template" }),
        __metadata("design:type", String)
    ], CreateWorldGenerationJobRequestBody.prototype, "template", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=worldCount" }),
        __metadata("design:type", CreateWorldGenerationJobRequestBodyWorldCount)
    ], CreateWorldGenerationJobRequestBody.prototype, "worldCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=worldTags" }),
        __metadata("design:type", Map)
    ], CreateWorldGenerationJobRequestBody.prototype, "worldTags", void 0);
    return CreateWorldGenerationJobRequestBody;
}(SpeakeasyBase));
export { CreateWorldGenerationJobRequestBody };
var CreateWorldGenerationJobRequest = /** @class */ (function (_super) {
    __extends(CreateWorldGenerationJobRequest, _super);
    function CreateWorldGenerationJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateWorldGenerationJobHeaders)
    ], CreateWorldGenerationJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateWorldGenerationJobRequestBody)
    ], CreateWorldGenerationJobRequest.prototype, "request", void 0);
    return CreateWorldGenerationJobRequest;
}(SpeakeasyBase));
export { CreateWorldGenerationJobRequest };
var CreateWorldGenerationJobResponse = /** @class */ (function (_super) {
    __extends(CreateWorldGenerationJobResponse, _super);
    function CreateWorldGenerationJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateWorldGenerationJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateWorldGenerationJobResponse)
    ], CreateWorldGenerationJobResponse.prototype, "createWorldGenerationJobResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateWorldGenerationJobResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateWorldGenerationJobResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateWorldGenerationJobResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateWorldGenerationJobResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateWorldGenerationJobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateWorldGenerationJobResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateWorldGenerationJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateWorldGenerationJobResponse.prototype, "throttlingException", void 0);
    return CreateWorldGenerationJobResponse;
}(SpeakeasyBase));
export { CreateWorldGenerationJobResponse };
