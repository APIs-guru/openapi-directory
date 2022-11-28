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
var AddVideoChannelSecurity = /** @class */ (function (_super) {
    __extends(AddVideoChannelSecurity, _super);
    function AddVideoChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], AddVideoChannelSecurity.prototype, "oAuth2", void 0);
    return AddVideoChannelSecurity;
}(SpeakeasyBase));
export { AddVideoChannelSecurity };
var AddVideoChannel204ApplicationJsonVideoChannel = /** @class */ (function (_super) {
    __extends(AddVideoChannel204ApplicationJsonVideoChannel, _super);
    function AddVideoChannel204ApplicationJsonVideoChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Map)
    ], AddVideoChannel204ApplicationJsonVideoChannel.prototype, "id", void 0);
    return AddVideoChannel204ApplicationJsonVideoChannel;
}(SpeakeasyBase));
export { AddVideoChannel204ApplicationJsonVideoChannel };
var AddVideoChannel204ApplicationJson = /** @class */ (function (_super) {
    __extends(AddVideoChannel204ApplicationJson, _super);
    function AddVideoChannel204ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoChannel" }),
        __metadata("design:type", AddVideoChannel204ApplicationJsonVideoChannel)
    ], AddVideoChannel204ApplicationJson.prototype, "videoChannel", void 0);
    return AddVideoChannel204ApplicationJson;
}(SpeakeasyBase));
export { AddVideoChannel204ApplicationJson };
var AddVideoChannelRequest = /** @class */ (function (_super) {
    __extends(AddVideoChannelRequest, _super);
    function AddVideoChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.VideoChannelCreateInput)
    ], AddVideoChannelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideoChannelSecurity)
    ], AddVideoChannelRequest.prototype, "security", void 0);
    return AddVideoChannelRequest;
}(SpeakeasyBase));
export { AddVideoChannelRequest };
var AddVideoChannelResponse = /** @class */ (function (_super) {
    __extends(AddVideoChannelResponse, _super);
    function AddVideoChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddVideoChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddVideoChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideoChannel204ApplicationJson)
    ], AddVideoChannelResponse.prototype, "addVideoChannel204ApplicationJsonObject", void 0);
    return AddVideoChannelResponse;
}(SpeakeasyBase));
export { AddVideoChannelResponse };
