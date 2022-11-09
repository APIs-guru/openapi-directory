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
var FunctionsListExecutionsPathParams = /** @class */ (function (_super) {
    __extends(FunctionsListExecutionsPathParams, _super);
    function FunctionsListExecutionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=functionId" }),
        __metadata("design:type", String)
    ], FunctionsListExecutionsPathParams.prototype, "functionId", void 0);
    return FunctionsListExecutionsPathParams;
}(SpeakeasyBase));
export { FunctionsListExecutionsPathParams };
var FunctionsListExecutionsQueryParams = /** @class */ (function (_super) {
    __extends(FunctionsListExecutionsQueryParams, _super);
    function FunctionsListExecutionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], FunctionsListExecutionsQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], FunctionsListExecutionsQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderType" }),
        __metadata("design:type", String)
    ], FunctionsListExecutionsQueryParams.prototype, "orderType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], FunctionsListExecutionsQueryParams.prototype, "search", void 0);
    return FunctionsListExecutionsQueryParams;
}(SpeakeasyBase));
export { FunctionsListExecutionsQueryParams };
var FunctionsListExecutionsSecurity = /** @class */ (function (_super) {
    __extends(FunctionsListExecutionsSecurity, _super);
    function FunctionsListExecutionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], FunctionsListExecutionsSecurity.prototype, "jwt", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], FunctionsListExecutionsSecurity.prototype, "project", void 0);
    return FunctionsListExecutionsSecurity;
}(SpeakeasyBase));
export { FunctionsListExecutionsSecurity };
var FunctionsListExecutionsRequest = /** @class */ (function (_super) {
    __extends(FunctionsListExecutionsRequest, _super);
    function FunctionsListExecutionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FunctionsListExecutionsPathParams)
    ], FunctionsListExecutionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FunctionsListExecutionsQueryParams)
    ], FunctionsListExecutionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FunctionsListExecutionsSecurity)
    ], FunctionsListExecutionsRequest.prototype, "security", void 0);
    return FunctionsListExecutionsRequest;
}(SpeakeasyBase));
export { FunctionsListExecutionsRequest };
var FunctionsListExecutionsResponse = /** @class */ (function (_super) {
    __extends(FunctionsListExecutionsResponse, _super);
    function FunctionsListExecutionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FunctionsListExecutionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FunctionsListExecutionsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ExecutionList)
    ], FunctionsListExecutionsResponse.prototype, "executionList", void 0);
    return FunctionsListExecutionsResponse;
}(SpeakeasyBase));
export { FunctionsListExecutionsResponse };
