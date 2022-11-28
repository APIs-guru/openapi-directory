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
var IssuesUpdateLabelPathParams = /** @class */ (function (_super) {
    __extends(IssuesUpdateLabelPathParams, _super);
    function IssuesUpdateLabelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IssuesUpdateLabelPathParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], IssuesUpdateLabelPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], IssuesUpdateLabelPathParams.prototype, "repo", void 0);
    return IssuesUpdateLabelPathParams;
}(SpeakeasyBase));
export { IssuesUpdateLabelPathParams };
var IssuesUpdateLabelRequestBody = /** @class */ (function (_super) {
    __extends(IssuesUpdateLabelRequestBody, _super);
    function IssuesUpdateLabelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], IssuesUpdateLabelRequestBody.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], IssuesUpdateLabelRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=new_name" }),
        __metadata("design:type", String)
    ], IssuesUpdateLabelRequestBody.prototype, "newName", void 0);
    return IssuesUpdateLabelRequestBody;
}(SpeakeasyBase));
export { IssuesUpdateLabelRequestBody };
var IssuesUpdateLabelRequest = /** @class */ (function (_super) {
    __extends(IssuesUpdateLabelRequest, _super);
    function IssuesUpdateLabelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IssuesUpdateLabelPathParams)
    ], IssuesUpdateLabelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", IssuesUpdateLabelRequestBody)
    ], IssuesUpdateLabelRequest.prototype, "request", void 0);
    return IssuesUpdateLabelRequest;
}(SpeakeasyBase));
export { IssuesUpdateLabelRequest };
var IssuesUpdateLabelResponse = /** @class */ (function (_super) {
    __extends(IssuesUpdateLabelResponse, _super);
    function IssuesUpdateLabelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IssuesUpdateLabelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IssuesUpdateLabelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Label)
    ], IssuesUpdateLabelResponse.prototype, "label", void 0);
    return IssuesUpdateLabelResponse;
}(SpeakeasyBase));
export { IssuesUpdateLabelResponse };
