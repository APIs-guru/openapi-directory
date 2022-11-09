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
var AccountUpdateNameRequestBody = /** @class */ (function (_super) {
    __extends(AccountUpdateNameRequestBody, _super);
    function AccountUpdateNameRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AccountUpdateNameRequestBody.prototype, "name", void 0);
    return AccountUpdateNameRequestBody;
}(SpeakeasyBase));
export { AccountUpdateNameRequestBody };
var AccountUpdateNameSecurity = /** @class */ (function (_super) {
    __extends(AccountUpdateNameSecurity, _super);
    function AccountUpdateNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], AccountUpdateNameSecurity.prototype, "jwt", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], AccountUpdateNameSecurity.prototype, "project", void 0);
    return AccountUpdateNameSecurity;
}(SpeakeasyBase));
export { AccountUpdateNameSecurity };
var AccountUpdateNameRequest = /** @class */ (function (_super) {
    __extends(AccountUpdateNameRequest, _super);
    function AccountUpdateNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AccountUpdateNameRequestBody)
    ], AccountUpdateNameRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AccountUpdateNameSecurity)
    ], AccountUpdateNameRequest.prototype, "security", void 0);
    return AccountUpdateNameRequest;
}(SpeakeasyBase));
export { AccountUpdateNameRequest };
var AccountUpdateNameResponse = /** @class */ (function (_super) {
    __extends(AccountUpdateNameResponse, _super);
    function AccountUpdateNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AccountUpdateNameResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AccountUpdateNameResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.User)
    ], AccountUpdateNameResponse.prototype, "user", void 0);
    return AccountUpdateNameResponse;
}(SpeakeasyBase));
export { AccountUpdateNameResponse };
