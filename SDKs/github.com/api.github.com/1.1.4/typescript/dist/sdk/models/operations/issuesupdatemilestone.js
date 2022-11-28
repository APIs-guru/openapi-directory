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
var IssuesUpdateMilestonePathParams = /** @class */ (function (_super) {
    __extends(IssuesUpdateMilestonePathParams, _super);
    function IssuesUpdateMilestonePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=milestone_number" }),
        __metadata("design:type", Number)
    ], IssuesUpdateMilestonePathParams.prototype, "milestoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], IssuesUpdateMilestonePathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], IssuesUpdateMilestonePathParams.prototype, "repo", void 0);
    return IssuesUpdateMilestonePathParams;
}(SpeakeasyBase));
export { IssuesUpdateMilestonePathParams };
export var IssuesUpdateMilestoneRequestBodyStateEnum;
(function (IssuesUpdateMilestoneRequestBodyStateEnum) {
    IssuesUpdateMilestoneRequestBodyStateEnum["Open"] = "open";
    IssuesUpdateMilestoneRequestBodyStateEnum["Closed"] = "closed";
})(IssuesUpdateMilestoneRequestBodyStateEnum || (IssuesUpdateMilestoneRequestBodyStateEnum = {}));
var IssuesUpdateMilestoneRequestBody = /** @class */ (function (_super) {
    __extends(IssuesUpdateMilestoneRequestBody, _super);
    function IssuesUpdateMilestoneRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], IssuesUpdateMilestoneRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_on" }),
        __metadata("design:type", String)
    ], IssuesUpdateMilestoneRequestBody.prototype, "dueOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], IssuesUpdateMilestoneRequestBody.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], IssuesUpdateMilestoneRequestBody.prototype, "title", void 0);
    return IssuesUpdateMilestoneRequestBody;
}(SpeakeasyBase));
export { IssuesUpdateMilestoneRequestBody };
var IssuesUpdateMilestoneRequest = /** @class */ (function (_super) {
    __extends(IssuesUpdateMilestoneRequest, _super);
    function IssuesUpdateMilestoneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IssuesUpdateMilestonePathParams)
    ], IssuesUpdateMilestoneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", IssuesUpdateMilestoneRequestBody)
    ], IssuesUpdateMilestoneRequest.prototype, "request", void 0);
    return IssuesUpdateMilestoneRequest;
}(SpeakeasyBase));
export { IssuesUpdateMilestoneRequest };
var IssuesUpdateMilestoneResponse = /** @class */ (function (_super) {
    __extends(IssuesUpdateMilestoneResponse, _super);
    function IssuesUpdateMilestoneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IssuesUpdateMilestoneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IssuesUpdateMilestoneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Milestone)
    ], IssuesUpdateMilestoneResponse.prototype, "milestone", void 0);
    return IssuesUpdateMilestoneResponse;
}(SpeakeasyBase));
export { IssuesUpdateMilestoneResponse };
