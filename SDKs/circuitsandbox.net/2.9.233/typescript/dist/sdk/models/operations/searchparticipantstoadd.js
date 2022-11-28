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
var SearchParticipantsToAddPathParams = /** @class */ (function (_super) {
    __extends(SearchParticipantsToAddPathParams, _super);
    function SearchParticipantsToAddPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], SearchParticipantsToAddPathParams.prototype, "id", void 0);
    return SearchParticipantsToAddPathParams;
}(SpeakeasyBase));
export { SearchParticipantsToAddPathParams };
var SearchParticipantsToAddQueryParams = /** @class */ (function (_super) {
    __extends(SearchParticipantsToAddQueryParams, _super);
    function SearchParticipantsToAddQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], SearchParticipantsToAddQueryParams.prototype, "query", void 0);
    return SearchParticipantsToAddQueryParams;
}(SpeakeasyBase));
export { SearchParticipantsToAddQueryParams };
var SearchParticipantsToAddSecurity = /** @class */ (function (_super) {
    __extends(SearchParticipantsToAddSecurity, _super);
    function SearchParticipantsToAddSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], SearchParticipantsToAddSecurity.prototype, "oauth", void 0);
    return SearchParticipantsToAddSecurity;
}(SpeakeasyBase));
export { SearchParticipantsToAddSecurity };
var SearchParticipantsToAddRequest = /** @class */ (function (_super) {
    __extends(SearchParticipantsToAddRequest, _super);
    function SearchParticipantsToAddRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchParticipantsToAddPathParams)
    ], SearchParticipantsToAddRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchParticipantsToAddQueryParams)
    ], SearchParticipantsToAddRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchParticipantsToAddSecurity)
    ], SearchParticipantsToAddRequest.prototype, "security", void 0);
    return SearchParticipantsToAddRequest;
}(SpeakeasyBase));
export { SearchParticipantsToAddRequest };
var SearchParticipantsToAddResponse = /** @class */ (function (_super) {
    __extends(SearchParticipantsToAddResponse, _super);
    function SearchParticipantsToAddResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], SearchParticipantsToAddResponse.prototype, "addParticipantsSearchResults", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SearchParticipantsToAddResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchParticipantsToAddResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchParticipantsToAddResponse.prototype, "statusCode", void 0);
    return SearchParticipantsToAddResponse;
}(SpeakeasyBase));
export { SearchParticipantsToAddResponse };
