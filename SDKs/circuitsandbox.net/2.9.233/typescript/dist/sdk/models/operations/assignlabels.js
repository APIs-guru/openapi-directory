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
var AssignLabelsPathParams = /** @class */ (function (_super) {
    __extends(AssignLabelsPathParams, _super);
    function AssignLabelsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], AssignLabelsPathParams.prototype, "id", void 0);
    return AssignLabelsPathParams;
}(SpeakeasyBase));
export { AssignLabelsPathParams };
var AssignLabelsRequestBody = /** @class */ (function (_super) {
    __extends(AssignLabelsRequestBody, _super);
    function AssignLabelsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=labels;" }),
        __metadata("design:type", Array)
    ], AssignLabelsRequestBody.prototype, "labels", void 0);
    return AssignLabelsRequestBody;
}(SpeakeasyBase));
export { AssignLabelsRequestBody };
var AssignLabelsSecurity = /** @class */ (function (_super) {
    __extends(AssignLabelsSecurity, _super);
    function AssignLabelsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], AssignLabelsSecurity.prototype, "oauth", void 0);
    return AssignLabelsSecurity;
}(SpeakeasyBase));
export { AssignLabelsSecurity };
var AssignLabelsRequest = /** @class */ (function (_super) {
    __extends(AssignLabelsRequest, _super);
    function AssignLabelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AssignLabelsPathParams)
    ], AssignLabelsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", AssignLabelsRequestBody)
    ], AssignLabelsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AssignLabelsSecurity)
    ], AssignLabelsRequest.prototype, "security", void 0);
    return AssignLabelsRequest;
}(SpeakeasyBase));
export { AssignLabelsRequest };
var AssignLabelsResponse = /** @class */ (function (_super) {
    __extends(AssignLabelsResponse, _super);
    function AssignLabelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AssignLabelsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AssignLabelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], AssignLabelsResponse.prototype, "labelIds", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AssignLabelsResponse.prototype, "statusCode", void 0);
    return AssignLabelsResponse;
}(SpeakeasyBase));
export { AssignLabelsResponse };
