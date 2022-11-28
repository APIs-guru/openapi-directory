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
var ResumeCampaignPathParams = /** @class */ (function (_super) {
    __extends(ResumeCampaignPathParams, _super);
    function ResumeCampaignPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" }),
        __metadata("design:type", String)
    ], ResumeCampaignPathParams.prototype, "campaignId", void 0);
    return ResumeCampaignPathParams;
}(SpeakeasyBase));
export { ResumeCampaignPathParams };
var ResumeCampaignSecurity = /** @class */ (function (_super) {
    __extends(ResumeCampaignSecurity, _super);
    function ResumeCampaignSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], ResumeCampaignSecurity.prototype, "apiAuth", void 0);
    return ResumeCampaignSecurity;
}(SpeakeasyBase));
export { ResumeCampaignSecurity };
var ResumeCampaignRequest = /** @class */ (function (_super) {
    __extends(ResumeCampaignRequest, _super);
    function ResumeCampaignRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResumeCampaignPathParams)
    ], ResumeCampaignRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResumeCampaignSecurity)
    ], ResumeCampaignRequest.prototype, "security", void 0);
    return ResumeCampaignRequest;
}(SpeakeasyBase));
export { ResumeCampaignRequest };
var ResumeCampaignResponse = /** @class */ (function (_super) {
    __extends(ResumeCampaignResponse, _super);
    function ResumeCampaignResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResumeCampaignResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResumeCampaignResponse.prototype, "statusCode", void 0);
    return ResumeCampaignResponse;
}(SpeakeasyBase));
export { ResumeCampaignResponse };
