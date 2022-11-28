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
var DeleteRepositoryPipelineKnownHostPathParams = /** @class */ (function (_super) {
    __extends(DeleteRepositoryPipelineKnownHostPathParams, _super);
    function DeleteRepositoryPipelineKnownHostPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=known_host_uuid" }),
        __metadata("design:type", String)
    ], DeleteRepositoryPipelineKnownHostPathParams.prototype, "knownHostUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], DeleteRepositoryPipelineKnownHostPathParams.prototype, "repoSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], DeleteRepositoryPipelineKnownHostPathParams.prototype, "workspace", void 0);
    return DeleteRepositoryPipelineKnownHostPathParams;
}(SpeakeasyBase));
export { DeleteRepositoryPipelineKnownHostPathParams };
var DeleteRepositoryPipelineKnownHostRequest = /** @class */ (function (_super) {
    __extends(DeleteRepositoryPipelineKnownHostRequest, _super);
    function DeleteRepositoryPipelineKnownHostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteRepositoryPipelineKnownHostPathParams)
    ], DeleteRepositoryPipelineKnownHostRequest.prototype, "pathParams", void 0);
    return DeleteRepositoryPipelineKnownHostRequest;
}(SpeakeasyBase));
export { DeleteRepositoryPipelineKnownHostRequest };
var DeleteRepositoryPipelineKnownHostResponse = /** @class */ (function (_super) {
    __extends(DeleteRepositoryPipelineKnownHostResponse, _super);
    function DeleteRepositoryPipelineKnownHostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteRepositoryPipelineKnownHostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteRepositoryPipelineKnownHostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteRepositoryPipelineKnownHostResponse.prototype, "error", void 0);
    return DeleteRepositoryPipelineKnownHostResponse;
}(SpeakeasyBase));
export { DeleteRepositoryPipelineKnownHostResponse };
