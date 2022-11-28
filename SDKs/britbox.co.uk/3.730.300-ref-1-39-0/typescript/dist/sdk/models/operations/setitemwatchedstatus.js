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
var SetItemWatchedStatusPathParams = /** @class */ (function (_super) {
    __extends(SetItemWatchedStatusPathParams, _super);
    function SetItemWatchedStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], SetItemWatchedStatusPathParams.prototype, "itemId", void 0);
    return SetItemWatchedStatusPathParams;
}(SpeakeasyBase));
export { SetItemWatchedStatusPathParams };
var SetItemWatchedStatusQueryParams = /** @class */ (function (_super) {
    __extends(SetItemWatchedStatusQueryParams, _super);
    function SetItemWatchedStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], SetItemWatchedStatusQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], SetItemWatchedStatusQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=position" }),
        __metadata("design:type", Number)
    ], SetItemWatchedStatusQueryParams.prototype, "position", void 0);
    return SetItemWatchedStatusQueryParams;
}(SpeakeasyBase));
export { SetItemWatchedStatusQueryParams };
var SetItemWatchedStatusSecurity = /** @class */ (function (_super) {
    __extends(SetItemWatchedStatusSecurity, _super);
    function SetItemWatchedStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeProfileAuth)
    ], SetItemWatchedStatusSecurity.prototype, "profileAuth", void 0);
    return SetItemWatchedStatusSecurity;
}(SpeakeasyBase));
export { SetItemWatchedStatusSecurity };
var SetItemWatchedStatusRequest = /** @class */ (function (_super) {
    __extends(SetItemWatchedStatusRequest, _super);
    function SetItemWatchedStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetItemWatchedStatusPathParams)
    ], SetItemWatchedStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetItemWatchedStatusQueryParams)
    ], SetItemWatchedStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetItemWatchedStatusSecurity)
    ], SetItemWatchedStatusRequest.prototype, "security", void 0);
    return SetItemWatchedStatusRequest;
}(SpeakeasyBase));
export { SetItemWatchedStatusRequest };
var SetItemWatchedStatusResponse = /** @class */ (function (_super) {
    __extends(SetItemWatchedStatusResponse, _super);
    function SetItemWatchedStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetItemWatchedStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], SetItemWatchedStatusResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetItemWatchedStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Watched)
    ], SetItemWatchedStatusResponse.prototype, "watched", void 0);
    return SetItemWatchedStatusResponse;
}(SpeakeasyBase));
export { SetItemWatchedStatusResponse };
