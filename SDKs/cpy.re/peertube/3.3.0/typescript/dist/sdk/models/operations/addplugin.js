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
var AddPluginRequestBody1 = /** @class */ (function (_super) {
    __extends(AddPluginRequestBody1, _super);
    function AddPluginRequestBody1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=npmName" }),
        __metadata("design:type", String)
    ], AddPluginRequestBody1.prototype, "npmName", void 0);
    return AddPluginRequestBody1;
}(SpeakeasyBase));
export { AddPluginRequestBody1 };
var AddPluginRequestBody2 = /** @class */ (function (_super) {
    __extends(AddPluginRequestBody2, _super);
    function AddPluginRequestBody2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], AddPluginRequestBody2.prototype, "path", void 0);
    return AddPluginRequestBody2;
}(SpeakeasyBase));
export { AddPluginRequestBody2 };
var AddPluginSecurity = /** @class */ (function (_super) {
    __extends(AddPluginSecurity, _super);
    function AddPluginSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], AddPluginSecurity.prototype, "oAuth2", void 0);
    return AddPluginSecurity;
}(SpeakeasyBase));
export { AddPluginSecurity };
var AddPluginRequest = /** @class */ (function (_super) {
    __extends(AddPluginRequest, _super);
    function AddPluginRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], AddPluginRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddPluginSecurity)
    ], AddPluginRequest.prototype, "security", void 0);
    return AddPluginRequest;
}(SpeakeasyBase));
export { AddPluginRequest };
var AddPluginResponse = /** @class */ (function (_super) {
    __extends(AddPluginResponse, _super);
    function AddPluginResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddPluginResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddPluginResponse.prototype, "statusCode", void 0);
    return AddPluginResponse;
}(SpeakeasyBase));
export { AddPluginResponse };
