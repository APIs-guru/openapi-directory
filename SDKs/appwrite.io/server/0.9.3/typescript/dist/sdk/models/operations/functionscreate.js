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
var FunctionsCreateRequestBody = /** @class */ (function (_super) {
    __extends(FunctionsCreateRequestBody, _super);
    function FunctionsCreateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=events" }),
        __metadata("design:type", Array)
    ], FunctionsCreateRequestBody.prototype, "events", void 0);
    __decorate([
        Metadata({ data: "json, name=execute" }),
        __metadata("design:type", Array)
    ], FunctionsCreateRequestBody.prototype, "execute", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FunctionsCreateRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=runtime" }),
        __metadata("design:type", String)
    ], FunctionsCreateRequestBody.prototype, "runtime", void 0);
    __decorate([
        Metadata({ data: "json, name=schedule" }),
        __metadata("design:type", String)
    ], FunctionsCreateRequestBody.prototype, "schedule", void 0);
    __decorate([
        Metadata({ data: "json, name=timeout" }),
        __metadata("design:type", Number)
    ], FunctionsCreateRequestBody.prototype, "timeout", void 0);
    __decorate([
        Metadata({ data: "json, name=vars" }),
        __metadata("design:type", Map)
    ], FunctionsCreateRequestBody.prototype, "vars", void 0);
    return FunctionsCreateRequestBody;
}(SpeakeasyBase));
export { FunctionsCreateRequestBody };
var FunctionsCreateSecurity = /** @class */ (function (_super) {
    __extends(FunctionsCreateSecurity, _super);
    function FunctionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], FunctionsCreateSecurity.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], FunctionsCreateSecurity.prototype, "project", void 0);
    return FunctionsCreateSecurity;
}(SpeakeasyBase));
export { FunctionsCreateSecurity };
var FunctionsCreateRequest = /** @class */ (function (_super) {
    __extends(FunctionsCreateRequest, _super);
    function FunctionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", FunctionsCreateRequestBody)
    ], FunctionsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FunctionsCreateSecurity)
    ], FunctionsCreateRequest.prototype, "security", void 0);
    return FunctionsCreateRequest;
}(SpeakeasyBase));
export { FunctionsCreateRequest };
var FunctionsCreateResponse = /** @class */ (function (_super) {
    __extends(FunctionsCreateResponse, _super);
    function FunctionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FunctionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FunctionsCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Function)
    ], FunctionsCreateResponse.prototype, "function", void 0);
    return FunctionsCreateResponse;
}(SpeakeasyBase));
export { FunctionsCreateResponse };
