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
var PatchPlayersPlayerIdPathParams = /** @class */ (function (_super) {
    __extends(PatchPlayersPlayerIdPathParams, _super);
    function PatchPlayersPlayerIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerId" }),
        __metadata("design:type", String)
    ], PatchPlayersPlayerIdPathParams.prototype, "playerId", void 0);
    return PatchPlayersPlayerIdPathParams;
}(SpeakeasyBase));
export { PatchPlayersPlayerIdPathParams };
var PatchPlayersPlayerIdSecurity = /** @class */ (function (_super) {
    __extends(PatchPlayersPlayerIdSecurity, _super);
    function PatchPlayersPlayerIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], PatchPlayersPlayerIdSecurity.prototype, "bearerAuth", void 0);
    return PatchPlayersPlayerIdSecurity;
}(SpeakeasyBase));
export { PatchPlayersPlayerIdSecurity };
var PatchPlayersPlayerIdRequest = /** @class */ (function (_super) {
    __extends(PatchPlayersPlayerIdRequest, _super);
    function PatchPlayersPlayerIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchPlayersPlayerIdPathParams)
    ], PatchPlayersPlayerIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Playerinput)
    ], PatchPlayersPlayerIdRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchPlayersPlayerIdSecurity)
    ], PatchPlayersPlayerIdRequest.prototype, "security", void 0);
    return PatchPlayersPlayerIdRequest;
}(SpeakeasyBase));
export { PatchPlayersPlayerIdRequest };
var PatchPlayersPlayerIdResponse = /** @class */ (function (_super) {
    __extends(PatchPlayersPlayerIdResponse, _super);
    function PatchPlayersPlayerIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchPlayersPlayerIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchPlayersPlayerIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFound)
    ], PatchPlayersPlayerIdResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Player)
    ], PatchPlayersPlayerIdResponse.prototype, "player", void 0);
    return PatchPlayersPlayerIdResponse;
}(SpeakeasyBase));
export { PatchPlayersPlayerIdResponse };
