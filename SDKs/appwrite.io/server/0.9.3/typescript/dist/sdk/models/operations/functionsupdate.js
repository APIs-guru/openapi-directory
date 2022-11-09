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
var FunctionsUpdatePathParams = /** @class */ (function (_super) {
    __extends(FunctionsUpdatePathParams, _super);
    function FunctionsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=functionId" }),
        __metadata("design:type", String)
    ], FunctionsUpdatePathParams.prototype, "functionId", void 0);
    return FunctionsUpdatePathParams;
}(SpeakeasyBase));
export { FunctionsUpdatePathParams };
var FunctionsUpdateRequestBody = /** @class */ (function (_super) {
    __extends(FunctionsUpdateRequestBody, _super);
    function FunctionsUpdateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=events" }),
        __metadata("design:type", Array)
    ], FunctionsUpdateRequestBody.prototype, "events", void 0);
    __decorate([
        Metadata({ data: "json, name=execute" }),
        __metadata("design:type", Array)
    ], FunctionsUpdateRequestBody.prototype, "execute", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FunctionsUpdateRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=schedule" }),
        __metadata("design:type", String)
    ], FunctionsUpdateRequestBody.prototype, "schedule", void 0);
    __decorate([
        Metadata({ data: "json, name=timeout" }),
        __metadata("design:type", Number)
    ], FunctionsUpdateRequestBody.prototype, "timeout", void 0);
    __decorate([
        Metadata({ data: "json, name=vars" }),
        __metadata("design:type", Map)
    ], FunctionsUpdateRequestBody.prototype, "vars", void 0);
    return FunctionsUpdateRequestBody;
}(SpeakeasyBase));
export { FunctionsUpdateRequestBody };
var FunctionsUpdateSecurity = /** @class */ (function (_super) {
    __extends(FunctionsUpdateSecurity, _super);
    function FunctionsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], FunctionsUpdateSecurity.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], FunctionsUpdateSecurity.prototype, "project", void 0);
    return FunctionsUpdateSecurity;
}(SpeakeasyBase));
export { FunctionsUpdateSecurity };
var FunctionsUpdateRequest = /** @class */ (function (_super) {
    __extends(FunctionsUpdateRequest, _super);
    function FunctionsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FunctionsUpdatePathParams)
    ], FunctionsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", FunctionsUpdateRequestBody)
    ], FunctionsUpdateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FunctionsUpdateSecurity)
    ], FunctionsUpdateRequest.prototype, "security", void 0);
    return FunctionsUpdateRequest;
}(SpeakeasyBase));
export { FunctionsUpdateRequest };
var FunctionsUpdateResponse = /** @class */ (function (_super) {
    __extends(FunctionsUpdateResponse, _super);
    function FunctionsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FunctionsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FunctionsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Function)
    ], FunctionsUpdateResponse.prototype, "function", void 0);
    return FunctionsUpdateResponse;
}(SpeakeasyBase));
export { FunctionsUpdateResponse };
