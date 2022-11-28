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
export var StartOnDemandReplicationRunXAmzTargetEnum;
(function (StartOnDemandReplicationRunXAmzTargetEnum) {
    StartOnDemandReplicationRunXAmzTargetEnum["AwsServerMigrationServiceV20161024StartOnDemandReplicationRun"] = "AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun";
})(StartOnDemandReplicationRunXAmzTargetEnum || (StartOnDemandReplicationRunXAmzTargetEnum = {}));
var StartOnDemandReplicationRunHeaders = /** @class */ (function (_super) {
    __extends(StartOnDemandReplicationRunHeaders, _super);
    function StartOnDemandReplicationRunHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartOnDemandReplicationRunHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartOnDemandReplicationRunHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartOnDemandReplicationRunHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartOnDemandReplicationRunHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartOnDemandReplicationRunHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartOnDemandReplicationRunHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartOnDemandReplicationRunHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], StartOnDemandReplicationRunHeaders.prototype, "xAmzTarget", void 0);
    return StartOnDemandReplicationRunHeaders;
}(SpeakeasyBase));
export { StartOnDemandReplicationRunHeaders };
var StartOnDemandReplicationRunRequest = /** @class */ (function (_super) {
    __extends(StartOnDemandReplicationRunRequest, _super);
    function StartOnDemandReplicationRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartOnDemandReplicationRunHeaders)
    ], StartOnDemandReplicationRunRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StartOnDemandReplicationRunRequest)
    ], StartOnDemandReplicationRunRequest.prototype, "request", void 0);
    return StartOnDemandReplicationRunRequest;
}(SpeakeasyBase));
export { StartOnDemandReplicationRunRequest };
var StartOnDemandReplicationRunResponse = /** @class */ (function (_super) {
    __extends(StartOnDemandReplicationRunResponse, _super);
    function StartOnDemandReplicationRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartOnDemandReplicationRunResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartOnDemandReplicationRunResponse.prototype, "dryRunOperationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartOnDemandReplicationRunResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartOnDemandReplicationRunResponse.prototype, "missingRequiredParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartOnDemandReplicationRunResponse.prototype, "operationNotPermittedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartOnDemandReplicationRunResponse.prototype, "replicationRunLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartOnDemandReplicationRunResponse)
    ], StartOnDemandReplicationRunResponse.prototype, "startOnDemandReplicationRunResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartOnDemandReplicationRunResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartOnDemandReplicationRunResponse.prototype, "unauthorizedOperationException", void 0);
    return StartOnDemandReplicationRunResponse;
}(SpeakeasyBase));
export { StartOnDemandReplicationRunResponse };
