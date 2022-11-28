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
var OrgsListBlockedUsersPathParams = /** @class */ (function (_super) {
    __extends(OrgsListBlockedUsersPathParams, _super);
    function OrgsListBlockedUsersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], OrgsListBlockedUsersPathParams.prototype, "org", void 0);
    return OrgsListBlockedUsersPathParams;
}(SpeakeasyBase));
export { OrgsListBlockedUsersPathParams };
var OrgsListBlockedUsers415ApplicationJson = /** @class */ (function (_super) {
    __extends(OrgsListBlockedUsers415ApplicationJson, _super);
    function OrgsListBlockedUsers415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], OrgsListBlockedUsers415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], OrgsListBlockedUsers415ApplicationJson.prototype, "message", void 0);
    return OrgsListBlockedUsers415ApplicationJson;
}(SpeakeasyBase));
export { OrgsListBlockedUsers415ApplicationJson };
var OrgsListBlockedUsersRequest = /** @class */ (function (_super) {
    __extends(OrgsListBlockedUsersRequest, _super);
    function OrgsListBlockedUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgsListBlockedUsersPathParams)
    ], OrgsListBlockedUsersRequest.prototype, "pathParams", void 0);
    return OrgsListBlockedUsersRequest;
}(SpeakeasyBase));
export { OrgsListBlockedUsersRequest };
var OrgsListBlockedUsersResponse = /** @class */ (function (_super) {
    __extends(OrgsListBlockedUsersResponse, _super);
    function OrgsListBlockedUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OrgsListBlockedUsersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OrgsListBlockedUsersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgsListBlockedUsers415ApplicationJson)
    ], OrgsListBlockedUsersResponse.prototype, "orgsListBlockedUsers415ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.SimpleUser }),
        __metadata("design:type", Array)
    ], OrgsListBlockedUsersResponse.prototype, "simpleUsers", void 0);
    return OrgsListBlockedUsersResponse;
}(SpeakeasyBase));
export { OrgsListBlockedUsersResponse };
