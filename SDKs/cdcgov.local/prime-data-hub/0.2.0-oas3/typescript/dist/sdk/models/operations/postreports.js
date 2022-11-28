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
export var PostReportsOptionEnum;
(function (PostReportsOptionEnum) {
    PostReportsOptionEnum["ValidatePayload"] = "ValidatePayload";
    PostReportsOptionEnum["CheckConnections"] = "CheckConnections";
    PostReportsOptionEnum["SendImmediately"] = "SendImmediately";
    PostReportsOptionEnum["SkipSend"] = "SkipSend";
    PostReportsOptionEnum["SkipInvalidItems"] = "SkipInvalidItems";
})(PostReportsOptionEnum || (PostReportsOptionEnum = {}));
var PostReportsQueryParams = /** @class */ (function (_super) {
    __extends(PostReportsQueryParams, _super);
    function PostReportsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client" }),
        __metadata("design:type", String)
    ], PostReportsQueryParams.prototype, "client", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=default" }),
        __metadata("design:type", Array)
    ], PostReportsQueryParams.prototype, "default", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=option" }),
        __metadata("design:type", String)
    ], PostReportsQueryParams.prototype, "option", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeTo" }),
        __metadata("design:type", Array)
    ], PostReportsQueryParams.prototype, "routeTo", void 0);
    return PostReportsQueryParams;
}(SpeakeasyBase));
export { PostReportsQueryParams };
var PostReportsSecurity = /** @class */ (function (_super) {
    __extends(PostReportsSecurity, _super);
    function PostReportsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostReportsSecurity.prototype, "apiKeyAuth", void 0);
    return PostReportsSecurity;
}(SpeakeasyBase));
export { PostReportsSecurity };
var PostReportsRequest = /** @class */ (function (_super) {
    __extends(PostReportsRequest, _super);
    function PostReportsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostReportsQueryParams)
    ], PostReportsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/csv" }),
        __metadata("design:type", String)
    ], PostReportsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostReportsSecurity)
    ], PostReportsRequest.prototype, "security", void 0);
    return PostReportsRequest;
}(SpeakeasyBase));
export { PostReportsRequest };
var PostReportsResponse = /** @class */ (function (_super) {
    __extends(PostReportsResponse, _super);
    function PostReportsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostReportsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Report)
    ], PostReportsResponse.prototype, "report", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostReportsResponse.prototype, "statusCode", void 0);
    return PostReportsResponse;
}(SpeakeasyBase));
export { PostReportsResponse };
