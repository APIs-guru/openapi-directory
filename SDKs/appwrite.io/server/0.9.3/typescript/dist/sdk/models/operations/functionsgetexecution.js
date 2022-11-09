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
var FunctionsGetExecutionPathParams = /** @class */ (function (_super) {
    __extends(FunctionsGetExecutionPathParams, _super);
    function FunctionsGetExecutionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=executionId" }),
        __metadata("design:type", String)
    ], FunctionsGetExecutionPathParams.prototype, "executionId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=functionId" }),
        __metadata("design:type", String)
    ], FunctionsGetExecutionPathParams.prototype, "functionId", void 0);
    return FunctionsGetExecutionPathParams;
}(SpeakeasyBase));
export { FunctionsGetExecutionPathParams };
var FunctionsGetExecutionSecurity = /** @class */ (function (_super) {
    __extends(FunctionsGetExecutionSecurity, _super);
    function FunctionsGetExecutionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], FunctionsGetExecutionSecurity.prototype, "jwt", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], FunctionsGetExecutionSecurity.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], FunctionsGetExecutionSecurity.prototype, "project", void 0);
    return FunctionsGetExecutionSecurity;
}(SpeakeasyBase));
export { FunctionsGetExecutionSecurity };
var FunctionsGetExecutionRequest = /** @class */ (function (_super) {
    __extends(FunctionsGetExecutionRequest, _super);
    function FunctionsGetExecutionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FunctionsGetExecutionPathParams)
    ], FunctionsGetExecutionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FunctionsGetExecutionSecurity)
    ], FunctionsGetExecutionRequest.prototype, "security", void 0);
    return FunctionsGetExecutionRequest;
}(SpeakeasyBase));
export { FunctionsGetExecutionRequest };
var FunctionsGetExecutionResponse = /** @class */ (function (_super) {
    __extends(FunctionsGetExecutionResponse, _super);
    function FunctionsGetExecutionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FunctionsGetExecutionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FunctionsGetExecutionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Execution)
    ], FunctionsGetExecutionResponse.prototype, "execution", void 0);
    return FunctionsGetExecutionResponse;
}(SpeakeasyBase));
export { FunctionsGetExecutionResponse };
