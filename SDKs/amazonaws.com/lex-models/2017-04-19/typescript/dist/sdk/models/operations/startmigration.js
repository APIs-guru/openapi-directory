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
var StartMigrationHeaders = /** @class */ (function (_super) {
    __extends(StartMigrationHeaders, _super);
    function StartMigrationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartMigrationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartMigrationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartMigrationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartMigrationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartMigrationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartMigrationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartMigrationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartMigrationHeaders;
}(SpeakeasyBase));
export { StartMigrationHeaders };
export var StartMigrationRequestBodyMigrationStrategyEnum;
(function (StartMigrationRequestBodyMigrationStrategyEnum) {
    StartMigrationRequestBodyMigrationStrategyEnum["CreateNew"] = "CREATE_NEW";
    StartMigrationRequestBodyMigrationStrategyEnum["UpdateExisting"] = "UPDATE_EXISTING";
})(StartMigrationRequestBodyMigrationStrategyEnum || (StartMigrationRequestBodyMigrationStrategyEnum = {}));
var StartMigrationRequestBody = /** @class */ (function (_super) {
    __extends(StartMigrationRequestBody, _super);
    function StartMigrationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=migrationStrategy" }),
        __metadata("design:type", String)
    ], StartMigrationRequestBody.prototype, "migrationStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=v1BotName" }),
        __metadata("design:type", String)
    ], StartMigrationRequestBody.prototype, "v1BotName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=v1BotVersion" }),
        __metadata("design:type", String)
    ], StartMigrationRequestBody.prototype, "v1BotVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=v2BotName" }),
        __metadata("design:type", String)
    ], StartMigrationRequestBody.prototype, "v2BotName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=v2BotRole" }),
        __metadata("design:type", String)
    ], StartMigrationRequestBody.prototype, "v2BotRole", void 0);
    return StartMigrationRequestBody;
}(SpeakeasyBase));
export { StartMigrationRequestBody };
var StartMigrationRequest = /** @class */ (function (_super) {
    __extends(StartMigrationRequest, _super);
    function StartMigrationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartMigrationHeaders)
    ], StartMigrationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartMigrationRequestBody)
    ], StartMigrationRequest.prototype, "request", void 0);
    return StartMigrationRequest;
}(SpeakeasyBase));
export { StartMigrationRequest };
var StartMigrationResponse = /** @class */ (function (_super) {
    __extends(StartMigrationResponse, _super);
    function StartMigrationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartMigrationResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartMigrationResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartMigrationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartMigrationResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartMigrationResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartMigrationResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartMigrationResponse)
    ], StartMigrationResponse.prototype, "startMigrationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartMigrationResponse.prototype, "statusCode", void 0);
    return StartMigrationResponse;
}(SpeakeasyBase));
export { StartMigrationResponse };
