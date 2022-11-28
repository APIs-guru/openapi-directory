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
import { AuthTypeEnum } from "./authtypeenum";
export var ConsumerConnectionStateEnum;
(function (ConsumerConnectionStateEnum) {
    ConsumerConnectionStateEnum["Available"] = "available";
    ConsumerConnectionStateEnum["Callable"] = "callable";
    ConsumerConnectionStateEnum["Added"] = "added";
    ConsumerConnectionStateEnum["Configured"] = "configured";
    ConsumerConnectionStateEnum["Authorized"] = "authorized";
})(ConsumerConnectionStateEnum || (ConsumerConnectionStateEnum = {}));
var ConsumerConnection = /** @class */ (function (_super) {
    __extends(ConsumerConnection, _super);
    function ConsumerConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_type" }),
        __metadata("design:type", String)
    ], ConsumerConnection.prototype, "authType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumer_id" }),
        __metadata("design:type", String)
    ], ConsumerConnection.prototype, "consumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], ConsumerConnection.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], ConsumerConnection.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icon" }),
        __metadata("design:type", String)
    ], ConsumerConnection.prototype, "icon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ConsumerConnection.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo" }),
        __metadata("design:type", String)
    ], ConsumerConnection.prototype, "logo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], ConsumerConnection.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConsumerConnection.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_id" }),
        __metadata("design:type", String)
    ], ConsumerConnection.prototype, "serviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", Map)
    ], ConsumerConnection.prototype, "settings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ConsumerConnection.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag_line" }),
        __metadata("design:type", String)
    ], ConsumerConnection.prototype, "tagLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unified_api" }),
        __metadata("design:type", String)
    ], ConsumerConnection.prototype, "unifiedApi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], ConsumerConnection.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], ConsumerConnection.prototype, "website", void 0);
    return ConsumerConnection;
}(SpeakeasyBase));
export { ConsumerConnection };
