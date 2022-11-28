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
var GetGroupTopicByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetGroupTopicByIdQueryParams, _super);
    function GetGroupTopicByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetGroupTopicByIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" }),
        __metadata("design:type", String)
    ], GetGroupTopicByIdQueryParams.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topic_id" }),
        __metadata("design:type", String)
    ], GetGroupTopicByIdQueryParams.prototype, "topicId", void 0);
    return GetGroupTopicByIdQueryParams;
}(SpeakeasyBase));
export { GetGroupTopicByIdQueryParams };
var GetGroupTopicById200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetGroupTopicById200ApplicationJson, _super);
    function GetGroupTopicById200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stat" }),
        __metadata("design:type", String)
    ], GetGroupTopicById200ApplicationJson.prototype, "stat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic" }),
        __metadata("design:type", shared.Topic)
    ], GetGroupTopicById200ApplicationJson.prototype, "topic", void 0);
    return GetGroupTopicById200ApplicationJson;
}(SpeakeasyBase));
export { GetGroupTopicById200ApplicationJson };
var GetGroupTopicByIdRequest = /** @class */ (function (_super) {
    __extends(GetGroupTopicByIdRequest, _super);
    function GetGroupTopicByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGroupTopicByIdQueryParams)
    ], GetGroupTopicByIdRequest.prototype, "queryParams", void 0);
    return GetGroupTopicByIdRequest;
}(SpeakeasyBase));
export { GetGroupTopicByIdRequest };
var GetGroupTopicByIdResponse = /** @class */ (function (_super) {
    __extends(GetGroupTopicByIdResponse, _super);
    function GetGroupTopicByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGroupTopicByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGroupTopicByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGroupTopicById200ApplicationJson)
    ], GetGroupTopicByIdResponse.prototype, "getGroupTopicById200ApplicationJsonObject", void 0);
    return GetGroupTopicByIdResponse;
}(SpeakeasyBase));
export { GetGroupTopicByIdResponse };
