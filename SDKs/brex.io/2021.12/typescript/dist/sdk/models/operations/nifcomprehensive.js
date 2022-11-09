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
var NifComprehensivePathParams = /** @class */ (function (_super) {
    __extends(NifComprehensivePathParams, _super);
    function NifComprehensivePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=country" }),
        __metadata("design:type", String)
    ], NifComprehensivePathParams.prototype, "country", void 0);
    return NifComprehensivePathParams;
}(SpeakeasyBase));
export { NifComprehensivePathParams };
var NifComprehensiveRequestBody = /** @class */ (function (_super) {
    __extends(NifComprehensiveRequestBody, _super);
    function NifComprehensiveRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=companyAddress;" }),
        __metadata("design:type", String)
    ], NifComprehensiveRequestBody.prototype, "companyAddress", void 0);
    __decorate([
        Metadata({ data: "form, name=companyName;" }),
        __metadata("design:type", String)
    ], NifComprehensiveRequestBody.prototype, "companyName", void 0);
    __decorate([
        Metadata({ data: "form, name=nifNumber;" }),
        __metadata("design:type", String)
    ], NifComprehensiveRequestBody.prototype, "nifNumber", void 0);
    return NifComprehensiveRequestBody;
}(SpeakeasyBase));
export { NifComprehensiveRequestBody };
var NifComprehensiveSecurity = /** @class */ (function (_super) {
    __extends(NifComprehensiveSecurity, _super);
    function NifComprehensiveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], NifComprehensiveSecurity.prototype, "userKey", void 0);
    return NifComprehensiveSecurity;
}(SpeakeasyBase));
export { NifComprehensiveSecurity };
var NifComprehensiveRequest = /** @class */ (function (_super) {
    __extends(NifComprehensiveRequest, _super);
    function NifComprehensiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", NifComprehensivePathParams)
    ], NifComprehensiveRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", NifComprehensiveRequestBody)
    ], NifComprehensiveRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NifComprehensiveSecurity)
    ], NifComprehensiveRequest.prototype, "security", void 0);
    return NifComprehensiveRequest;
}(SpeakeasyBase));
export { NifComprehensiveRequest };
var NifComprehensiveResponse = /** @class */ (function (_super) {
    __extends(NifComprehensiveResponse, _super);
    function NifComprehensiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NifComprehensiveResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], NifComprehensiveResponse.prototype, "nifComprehensive200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], NifComprehensiveResponse.prototype, "nifComprehensiveDefaultApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NifComprehensiveResponse.prototype, "statusCode", void 0);
    return NifComprehensiveResponse;
}(SpeakeasyBase));
export { NifComprehensiveResponse };
