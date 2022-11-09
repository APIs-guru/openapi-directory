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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var UpdateEnvironmentPathParams = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentPathParams, _super);
    function UpdateEnvironmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentPathParams.prototype, "environmentId", void 0);
    return UpdateEnvironmentPathParams;
}(SpeakeasyBase));
export { UpdateEnvironmentPathParams };
var UpdateEnvironmentRequests = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentRequests, _super);
    function UpdateEnvironmentRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.UpdateEnvironmentModel)
    ], UpdateEnvironmentRequests.prototype, "updateEnvironmentModel", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateEnvironmentModel)
    ], UpdateEnvironmentRequests.prototype, "updateEnvironmentModel1", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.UpdateEnvironmentModel)
    ], UpdateEnvironmentRequests.prototype, "updateEnvironmentModel2", void 0);
    return UpdateEnvironmentRequests;
}(SpeakeasyBase));
export { UpdateEnvironmentRequests };
var UpdateEnvironmentRequest = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentRequest, _super);
    function UpdateEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateEnvironmentPathParams)
    ], UpdateEnvironmentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateEnvironmentRequests)
    ], UpdateEnvironmentRequest.prototype, "request", void 0);
    return UpdateEnvironmentRequest;
}(SpeakeasyBase));
export { UpdateEnvironmentRequest };
var UpdateEnvironmentResponse = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentResponse, _super);
    function UpdateEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.EnvironmentModel)
    ], UpdateEnvironmentResponse.prototype, "environmentModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.EnvironmentModelHaljson)
    ], UpdateEnvironmentResponse.prototype, "environmentModelHaljson", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateEnvironmentResponse.prototype, "statusCode", void 0);
    return UpdateEnvironmentResponse;
}(SpeakeasyBase));
export { UpdateEnvironmentResponse };
