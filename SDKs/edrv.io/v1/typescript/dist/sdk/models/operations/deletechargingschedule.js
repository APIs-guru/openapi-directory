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
var DeletechargingscheduleRequestBody = /** @class */ (function (_super) {
    __extends(DeletechargingscheduleRequestBody, _super);
    function DeletechargingscheduleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DeletechargingscheduleRequestBody.prototype, "id", void 0);
    return DeletechargingscheduleRequestBody;
}(SpeakeasyBase));
export { DeletechargingscheduleRequestBody };
var Deletechargingschedule201ApplicationJson = /** @class */ (function (_super) {
    __extends(Deletechargingschedule201ApplicationJson, _super);
    function Deletechargingschedule201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", Map)
    ], Deletechargingschedule201ApplicationJson.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Deletechargingschedule201ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ok" }),
        __metadata("design:type", Boolean)
    ], Deletechargingschedule201ApplicationJson.prototype, "ok", void 0);
    return Deletechargingschedule201ApplicationJson;
}(SpeakeasyBase));
export { Deletechargingschedule201ApplicationJson };
var DeletechargingscheduleRequest = /** @class */ (function (_super) {
    __extends(DeletechargingscheduleRequest, _super);
    function DeletechargingscheduleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DeletechargingscheduleRequestBody)
    ], DeletechargingscheduleRequest.prototype, "request", void 0);
    return DeletechargingscheduleRequest;
}(SpeakeasyBase));
export { DeletechargingscheduleRequest };
var DeletechargingscheduleResponse = /** @class */ (function (_super) {
    __extends(DeletechargingscheduleResponse, _super);
    function DeletechargingscheduleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeletechargingscheduleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeletechargingscheduleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Deletechargingschedule201ApplicationJson)
    ], DeletechargingscheduleResponse.prototype, "deletechargingschedule201ApplicationJsonObject", void 0);
    return DeletechargingscheduleResponse;
}(SpeakeasyBase));
export { DeletechargingscheduleResponse };
