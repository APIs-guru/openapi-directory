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
var UnassignLabelsPathParams = /** @class */ (function (_super) {
    __extends(UnassignLabelsPathParams, _super);
    function UnassignLabelsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UnassignLabelsPathParams.prototype, "id", void 0);
    return UnassignLabelsPathParams;
}(SpeakeasyBase));
export { UnassignLabelsPathParams };
var UnassignLabelsRequestBody = /** @class */ (function (_super) {
    __extends(UnassignLabelsRequestBody, _super);
    function UnassignLabelsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=labelIds;" }),
        __metadata("design:type", Array)
    ], UnassignLabelsRequestBody.prototype, "labelIds", void 0);
    return UnassignLabelsRequestBody;
}(SpeakeasyBase));
export { UnassignLabelsRequestBody };
var UnassignLabelsSecurity = /** @class */ (function (_super) {
    __extends(UnassignLabelsSecurity, _super);
    function UnassignLabelsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UnassignLabelsSecurity.prototype, "oauth", void 0);
    return UnassignLabelsSecurity;
}(SpeakeasyBase));
export { UnassignLabelsSecurity };
var UnassignLabelsRequest = /** @class */ (function (_super) {
    __extends(UnassignLabelsRequest, _super);
    function UnassignLabelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UnassignLabelsPathParams)
    ], UnassignLabelsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UnassignLabelsRequestBody)
    ], UnassignLabelsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UnassignLabelsSecurity)
    ], UnassignLabelsRequest.prototype, "security", void 0);
    return UnassignLabelsRequest;
}(SpeakeasyBase));
export { UnassignLabelsRequest };
var UnassignLabelsResponse = /** @class */ (function (_super) {
    __extends(UnassignLabelsResponse, _super);
    function UnassignLabelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UnassignLabelsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UnassignLabelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], UnassignLabelsResponse.prototype, "labelIds", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UnassignLabelsResponse.prototype, "statusCode", void 0);
    return UnassignLabelsResponse;
}(SpeakeasyBase));
export { UnassignLabelsResponse };
