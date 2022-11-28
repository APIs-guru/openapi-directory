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
var PullsUpdatePathParams = /** @class */ (function (_super) {
    __extends(PullsUpdatePathParams, _super);
    function PullsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], PullsUpdatePathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" }),
        __metadata("design:type", Number)
    ], PullsUpdatePathParams.prototype, "pullNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], PullsUpdatePathParams.prototype, "repo", void 0);
    return PullsUpdatePathParams;
}(SpeakeasyBase));
export { PullsUpdatePathParams };
export var PullsUpdateRequestBodyStateEnum;
(function (PullsUpdateRequestBodyStateEnum) {
    PullsUpdateRequestBodyStateEnum["Open"] = "open";
    PullsUpdateRequestBodyStateEnum["Closed"] = "closed";
})(PullsUpdateRequestBodyStateEnum || (PullsUpdateRequestBodyStateEnum = {}));
var PullsUpdateRequestBody = /** @class */ (function (_super) {
    __extends(PullsUpdateRequestBody, _super);
    function PullsUpdateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base" }),
        __metadata("design:type", String)
    ], PullsUpdateRequestBody.prototype, "base", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PullsUpdateRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintainer_can_modify" }),
        __metadata("design:type", Boolean)
    ], PullsUpdateRequestBody.prototype, "maintainerCanModify", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], PullsUpdateRequestBody.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PullsUpdateRequestBody.prototype, "title", void 0);
    return PullsUpdateRequestBody;
}(SpeakeasyBase));
export { PullsUpdateRequestBody };
var PullsUpdateRequest = /** @class */ (function (_super) {
    __extends(PullsUpdateRequest, _super);
    function PullsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsUpdatePathParams)
    ], PullsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PullsUpdateRequestBody)
    ], PullsUpdateRequest.prototype, "request", void 0);
    return PullsUpdateRequest;
}(SpeakeasyBase));
export { PullsUpdateRequest };
var PullsUpdateResponse = /** @class */ (function (_super) {
    __extends(PullsUpdateResponse, _super);
    function PullsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PullsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], PullsUpdateResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PullRequest)
    ], PullsUpdateResponse.prototype, "pullRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], PullsUpdateResponse.prototype, "validationError", void 0);
    return PullsUpdateResponse;
}(SpeakeasyBase));
export { PullsUpdateResponse };
