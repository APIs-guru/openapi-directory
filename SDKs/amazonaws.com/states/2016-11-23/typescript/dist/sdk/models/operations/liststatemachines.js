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
var ListStateMachinesQueryParams = /** @class */ (function (_super) {
    __extends(ListStateMachinesQueryParams, _super);
    function ListStateMachinesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListStateMachinesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListStateMachinesQueryParams.prototype, "nextToken", void 0);
    return ListStateMachinesQueryParams;
}(SpeakeasyBase));
export { ListStateMachinesQueryParams };
export var ListStateMachinesXAmzTargetEnum;
(function (ListStateMachinesXAmzTargetEnum) {
    ListStateMachinesXAmzTargetEnum["AwsStepFunctionsListStateMachines"] = "AWSStepFunctions.ListStateMachines";
})(ListStateMachinesXAmzTargetEnum || (ListStateMachinesXAmzTargetEnum = {}));
var ListStateMachinesHeaders = /** @class */ (function (_super) {
    __extends(ListStateMachinesHeaders, _super);
    function ListStateMachinesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListStateMachinesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListStateMachinesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListStateMachinesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListStateMachinesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListStateMachinesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListStateMachinesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListStateMachinesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListStateMachinesHeaders.prototype, "xAmzTarget", void 0);
    return ListStateMachinesHeaders;
}(SpeakeasyBase));
export { ListStateMachinesHeaders };
var ListStateMachinesRequest = /** @class */ (function (_super) {
    __extends(ListStateMachinesRequest, _super);
    function ListStateMachinesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListStateMachinesQueryParams)
    ], ListStateMachinesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListStateMachinesHeaders)
    ], ListStateMachinesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListStateMachinesInput)
    ], ListStateMachinesRequest.prototype, "request", void 0);
    return ListStateMachinesRequest;
}(SpeakeasyBase));
export { ListStateMachinesRequest };
var ListStateMachinesResponse = /** @class */ (function (_super) {
    __extends(ListStateMachinesResponse, _super);
    function ListStateMachinesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListStateMachinesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListStateMachinesResponse.prototype, "invalidToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListStateMachinesOutput)
    ], ListStateMachinesResponse.prototype, "listStateMachinesOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListStateMachinesResponse.prototype, "statusCode", void 0);
    return ListStateMachinesResponse;
}(SpeakeasyBase));
export { ListStateMachinesResponse };
