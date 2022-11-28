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
var Destiny2PullFromPostmasterSecurity = /** @class */ (function (_super) {
    __extends(Destiny2PullFromPostmasterSecurity, _super);
    function Destiny2PullFromPostmasterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Destiny2PullFromPostmasterSecurity.prototype, "oauth2", void 0);
    return Destiny2PullFromPostmasterSecurity;
}(SpeakeasyBase));
export { Destiny2PullFromPostmasterSecurity };
var Destiny2PullFromPostmasterRequest = /** @class */ (function (_super) {
    __extends(Destiny2PullFromPostmasterRequest, _super);
    function Destiny2PullFromPostmasterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2PullFromPostmasterSecurity)
    ], Destiny2PullFromPostmasterRequest.prototype, "security", void 0);
    return Destiny2PullFromPostmasterRequest;
}(SpeakeasyBase));
export { Destiny2PullFromPostmasterRequest };
var Destiny2PullFromPostmasterResponse = /** @class */ (function (_super) {
    __extends(Destiny2PullFromPostmasterResponse, _super);
    function Destiny2PullFromPostmasterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], Destiny2PullFromPostmasterResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Destiny2PullFromPostmasterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Destiny2PullFromPostmasterResponse.prototype, "statusCode", void 0);
    return Destiny2PullFromPostmasterResponse;
}(SpeakeasyBase));
export { Destiny2PullFromPostmasterResponse };
