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
var ReposTransferPathParams = /** @class */ (function (_super) {
    __extends(ReposTransferPathParams, _super);
    function ReposTransferPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposTransferPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposTransferPathParams.prototype, "repo", void 0);
    return ReposTransferPathParams;
}(SpeakeasyBase));
export { ReposTransferPathParams };
var ReposTransferRequestBody = /** @class */ (function (_super) {
    __extends(ReposTransferRequestBody, _super);
    function ReposTransferRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=new_owner" }),
        __metadata("design:type", String)
    ], ReposTransferRequestBody.prototype, "newOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team_ids" }),
        __metadata("design:type", Array)
    ], ReposTransferRequestBody.prototype, "teamIds", void 0);
    return ReposTransferRequestBody;
}(SpeakeasyBase));
export { ReposTransferRequestBody };
var ReposTransferRequest = /** @class */ (function (_super) {
    __extends(ReposTransferRequest, _super);
    function ReposTransferRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposTransferPathParams)
    ], ReposTransferRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposTransferRequestBody)
    ], ReposTransferRequest.prototype, "request", void 0);
    return ReposTransferRequest;
}(SpeakeasyBase));
export { ReposTransferRequest };
var ReposTransferResponse = /** @class */ (function (_super) {
    __extends(ReposTransferResponse, _super);
    function ReposTransferResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposTransferResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposTransferResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MinimalRepository)
    ], ReposTransferResponse.prototype, "minimalRepository", void 0);
    return ReposTransferResponse;
}(SpeakeasyBase));
export { ReposTransferResponse };
