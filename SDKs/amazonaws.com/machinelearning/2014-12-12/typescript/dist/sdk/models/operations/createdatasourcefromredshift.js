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
export var CreateDataSourceFromRedshiftXAmzTargetEnum;
(function (CreateDataSourceFromRedshiftXAmzTargetEnum) {
    CreateDataSourceFromRedshiftXAmzTargetEnum["AmazonMl20141212CreateDataSourceFromRedshift"] = "AmazonML_20141212.CreateDataSourceFromRedshift";
})(CreateDataSourceFromRedshiftXAmzTargetEnum || (CreateDataSourceFromRedshiftXAmzTargetEnum = {}));
var CreateDataSourceFromRedshiftHeaders = /** @class */ (function (_super) {
    __extends(CreateDataSourceFromRedshiftHeaders, _super);
    function CreateDataSourceFromRedshiftHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateDataSourceFromRedshiftHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateDataSourceFromRedshiftHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateDataSourceFromRedshiftHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateDataSourceFromRedshiftHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateDataSourceFromRedshiftHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateDataSourceFromRedshiftHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateDataSourceFromRedshiftHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateDataSourceFromRedshiftHeaders.prototype, "xAmzTarget", void 0);
    return CreateDataSourceFromRedshiftHeaders;
}(SpeakeasyBase));
export { CreateDataSourceFromRedshiftHeaders };
var CreateDataSourceFromRedshiftRequest = /** @class */ (function (_super) {
    __extends(CreateDataSourceFromRedshiftRequest, _super);
    function CreateDataSourceFromRedshiftRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDataSourceFromRedshiftHeaders)
    ], CreateDataSourceFromRedshiftRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateDataSourceFromRedshiftInput)
    ], CreateDataSourceFromRedshiftRequest.prototype, "request", void 0);
    return CreateDataSourceFromRedshiftRequest;
}(SpeakeasyBase));
export { CreateDataSourceFromRedshiftRequest };
var CreateDataSourceFromRedshiftResponse = /** @class */ (function (_super) {
    __extends(CreateDataSourceFromRedshiftResponse, _super);
    function CreateDataSourceFromRedshiftResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDataSourceFromRedshiftResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateDataSourceFromRedshiftOutput)
    ], CreateDataSourceFromRedshiftResponse.prototype, "createDataSourceFromRedshiftOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDataSourceFromRedshiftResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDataSourceFromRedshiftResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDataSourceFromRedshiftResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDataSourceFromRedshiftResponse.prototype, "statusCode", void 0);
    return CreateDataSourceFromRedshiftResponse;
}(SpeakeasyBase));
export { CreateDataSourceFromRedshiftResponse };
