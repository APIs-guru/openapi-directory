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
var DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams = /** @class */ (function (_super) {
    __extends(DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams, _super);
    function DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fingerprint" }),
        __metadata("design:type", String)
    ], DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams.prototype, "username", void 0);
    return DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams;
}(SpeakeasyBase));
export { DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams };
export var DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJsonMessageEnum;
(function (DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJsonMessageEnum) {
    DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJsonMessageEnum["Ok"] = "OK";
})(DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJsonMessageEnum || (DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJsonMessageEnum = {}));
var DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJson, _super);
    function DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJson.prototype, "message", void 0);
    return DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJson;
}(SpeakeasyBase));
export { DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJson };
var DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest = /** @class */ (function (_super) {
    __extends(DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest, _super);
    function DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams)
    ], DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest.prototype, "pathParams", void 0);
    return DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest;
}(SpeakeasyBase));
export { DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest };
var DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse = /** @class */ (function (_super) {
    __extends(DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse, _super);
    function DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJson)
    ], DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse.prototype, "deleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse.prototype, "statusCode", void 0);
    return DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse;
}(SpeakeasyBase));
export { DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse };
