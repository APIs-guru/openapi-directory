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
var AddTextItemWithParentPathParams = /** @class */ (function (_super) {
    __extends(AddTextItemWithParentPathParams, _super);
    function AddTextItemWithParentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" }),
        __metadata("design:type", String)
    ], AddTextItemWithParentPathParams.prototype, "convId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], AddTextItemWithParentPathParams.prototype, "itemId", void 0);
    return AddTextItemWithParentPathParams;
}(SpeakeasyBase));
export { AddTextItemWithParentPathParams };
var AddTextItemWithParentRequestBody = /** @class */ (function (_super) {
    __extends(AddTextItemWithParentRequestBody, _super);
    function AddTextItemWithParentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=attachments;" }),
        __metadata("design:type", Array)
    ], AddTextItemWithParentRequestBody.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=content;" }),
        __metadata("design:type", String)
    ], AddTextItemWithParentRequestBody.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=formMetaData;" }),
        __metadata("design:type", String)
    ], AddTextItemWithParentRequestBody.prototype, "formMetaData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=subject;" }),
        __metadata("design:type", String)
    ], AddTextItemWithParentRequestBody.prototype, "subject", void 0);
    return AddTextItemWithParentRequestBody;
}(SpeakeasyBase));
export { AddTextItemWithParentRequestBody };
var AddTextItemWithParentSecurity = /** @class */ (function (_super) {
    __extends(AddTextItemWithParentSecurity, _super);
    function AddTextItemWithParentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], AddTextItemWithParentSecurity.prototype, "oauth", void 0);
    return AddTextItemWithParentSecurity;
}(SpeakeasyBase));
export { AddTextItemWithParentSecurity };
var AddTextItemWithParentRequest = /** @class */ (function (_super) {
    __extends(AddTextItemWithParentRequest, _super);
    function AddTextItemWithParentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddTextItemWithParentPathParams)
    ], AddTextItemWithParentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", AddTextItemWithParentRequestBody)
    ], AddTextItemWithParentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddTextItemWithParentSecurity)
    ], AddTextItemWithParentRequest.prototype, "security", void 0);
    return AddTextItemWithParentRequest;
}(SpeakeasyBase));
export { AddTextItemWithParentRequest };
var AddTextItemWithParentResponse = /** @class */ (function (_super) {
    __extends(AddTextItemWithParentResponse, _super);
    function AddTextItemWithParentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AddTextItemWithParentResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddTextItemWithParentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddTextItemWithParentResponse.prototype, "conversationItem", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddTextItemWithParentResponse.prototype, "statusCode", void 0);
    return AddTextItemWithParentResponse;
}(SpeakeasyBase));
export { AddTextItemWithParentResponse };
