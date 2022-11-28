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
var ReactionsDeleteLegacyPathParams = /** @class */ (function (_super) {
    __extends(ReactionsDeleteLegacyPathParams, _super);
    function ReactionsDeleteLegacyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reaction_id" }),
        __metadata("design:type", Number)
    ], ReactionsDeleteLegacyPathParams.prototype, "reactionId", void 0);
    return ReactionsDeleteLegacyPathParams;
}(SpeakeasyBase));
export { ReactionsDeleteLegacyPathParams };
var ReactionsDeleteLegacy415ApplicationJson = /** @class */ (function (_super) {
    __extends(ReactionsDeleteLegacy415ApplicationJson, _super);
    function ReactionsDeleteLegacy415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ReactionsDeleteLegacy415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReactionsDeleteLegacy415ApplicationJson.prototype, "message", void 0);
    return ReactionsDeleteLegacy415ApplicationJson;
}(SpeakeasyBase));
export { ReactionsDeleteLegacy415ApplicationJson };
var ReactionsDeleteLegacyRequest = /** @class */ (function (_super) {
    __extends(ReactionsDeleteLegacyRequest, _super);
    function ReactionsDeleteLegacyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsDeleteLegacyPathParams)
    ], ReactionsDeleteLegacyRequest.prototype, "pathParams", void 0);
    return ReactionsDeleteLegacyRequest;
}(SpeakeasyBase));
export { ReactionsDeleteLegacyRequest };
var ReactionsDeleteLegacyResponse = /** @class */ (function (_super) {
    __extends(ReactionsDeleteLegacyResponse, _super);
    function ReactionsDeleteLegacyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReactionsDeleteLegacyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReactionsDeleteLegacyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReactionsDeleteLegacyResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReactionsDeleteLegacy415ApplicationJson)
    ], ReactionsDeleteLegacyResponse.prototype, "reactionsDeleteLegacy415ApplicationJsonObject", void 0);
    return ReactionsDeleteLegacyResponse;
}(SpeakeasyBase));
export { ReactionsDeleteLegacyResponse };
