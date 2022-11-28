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
var NotePostPathParams = /** @class */ (function (_super) {
    __extends(NotePostPathParams, _super);
    function NotePostPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" }),
        __metadata("design:type", Number)
    ], NotePostPathParams.prototype, "recipeId", void 0);
    return NotePostPathParams;
}(SpeakeasyBase));
export { NotePostPathParams };
var NotePostRequests = /** @class */ (function (_super) {
    __extends(NotePostRequests, _super);
    function NotePostRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Api2ControllersWebApiNoteControllerNoteRequest)
    ], NotePostRequests.prototype, "api2ControllersWebApiNoteControllerNoteRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.Api2ControllersWebApiNoteControllerNoteRequest)
    ], NotePostRequests.prototype, "api2ControllersWebApiNoteControllerNoteRequest1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.Api2ControllersWebApiNoteControllerNoteRequest)
    ], NotePostRequests.prototype, "api2ControllersWebApiNoteControllerNoteRequest2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], NotePostRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], NotePostRequests.prototype, "textXml", void 0);
    return NotePostRequests;
}(SpeakeasyBase));
export { NotePostRequests };
var NotePostRequest = /** @class */ (function (_super) {
    __extends(NotePostRequest, _super);
    function NotePostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotePostPathParams)
    ], NotePostRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotePostRequests)
    ], NotePostRequest.prototype, "request", void 0);
    return NotePostRequest;
}(SpeakeasyBase));
export { NotePostRequest };
var NotePostResponse = /** @class */ (function (_super) {
    __extends(NotePostResponse, _super);
    function NotePostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BigOvenModelApi2RecipeNote)
    ], NotePostResponse.prototype, "bigOvenModelApi2RecipeNote", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], NotePostResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NotePostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NotePostResponse.prototype, "statusCode", void 0);
    return NotePostResponse;
}(SpeakeasyBase));
export { NotePostResponse };
