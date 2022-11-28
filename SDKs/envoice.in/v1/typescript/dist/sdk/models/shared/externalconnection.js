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
var ExternalConnection = /** @class */ (function (_super) {
    __extends(ExternalConnection, _super);
    function ExternalConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessToken" }),
        __metadata("design:type", String)
    ], ExternalConnection.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessTokenSecret" }),
        __metadata("design:type", String)
    ], ExternalConnection.prototype, "accessTokenSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", String)
    ], ExternalConnection.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpiresOn" }),
        __metadata("design:type", Date)
    ], ExternalConnection.prototype, "expiresOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalUserId" }),
        __metadata("design:type", String)
    ], ExternalConnection.prototype, "externalUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalUsername" }),
        __metadata("design:type", String)
    ], ExternalConnection.prototype, "externalUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], ExternalConnection.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Provider" }),
        __metadata("design:type", String)
    ], ExternalConnection.prototype, "provider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserId" }),
        __metadata("design:type", Number)
    ], ExternalConnection.prototype, "userId", void 0);
    return ExternalConnection;
}(SpeakeasyBase));
export { ExternalConnection };
