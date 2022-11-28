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
var GetJournalEntriesPathParams = /** @class */ (function (_super) {
    __extends(GetJournalEntriesPathParams, _super);
    function GetJournalEntriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=telephonyConversationId" }),
        __metadata("design:type", String)
    ], GetJournalEntriesPathParams.prototype, "telephonyConversationId", void 0);
    return GetJournalEntriesPathParams;
}(SpeakeasyBase));
export { GetJournalEntriesPathParams };
export var GetJournalEntriesDirectionEnum;
(function (GetJournalEntriesDirectionEnum) {
    GetJournalEntriesDirectionEnum["After"] = "AFTER";
    GetJournalEntriesDirectionEnum["Before"] = "BEFORE";
    GetJournalEntriesDirectionEnum["Both"] = "BOTH";
})(GetJournalEntriesDirectionEnum || (GetJournalEntriesDirectionEnum = {}));
export var GetJournalEntriesJournalFilterEnum;
(function (GetJournalEntriesJournalFilterEnum) {
    GetJournalEntriesJournalFilterEnum["All"] = "ALL";
    GetJournalEntriesJournalFilterEnum["Missed"] = "MISSED";
    GetJournalEntriesJournalFilterEnum["Dialed"] = "DIALED";
    GetJournalEntriesJournalFilterEnum["Received"] = "RECEIVED";
    GetJournalEntriesJournalFilterEnum["Diverted"] = "DIVERTED";
    GetJournalEntriesJournalFilterEnum["Voicemails"] = "VOICEMAILS";
    GetJournalEntriesJournalFilterEnum["UnheradVoicemails"] = "UNHERAD_VOICEMAILS";
})(GetJournalEntriesJournalFilterEnum || (GetJournalEntriesJournalFilterEnum = {}));
var GetJournalEntriesQueryParams = /** @class */ (function (_super) {
    __extends(GetJournalEntriesQueryParams, _super);
    function GetJournalEntriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetJournalEntriesQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=journalFilter" }),
        __metadata("design:type", String)
    ], GetJournalEntriesQueryParams.prototype, "journalFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfEntries" }),
        __metadata("design:type", Number)
    ], GetJournalEntriesQueryParams.prototype, "numberOfEntries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" }),
        __metadata("design:type", Number)
    ], GetJournalEntriesQueryParams.prototype, "timestamp", void 0);
    return GetJournalEntriesQueryParams;
}(SpeakeasyBase));
export { GetJournalEntriesQueryParams };
var GetJournalEntriesSecurity = /** @class */ (function (_super) {
    __extends(GetJournalEntriesSecurity, _super);
    function GetJournalEntriesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetJournalEntriesSecurity.prototype, "oauth", void 0);
    return GetJournalEntriesSecurity;
}(SpeakeasyBase));
export { GetJournalEntriesSecurity };
var GetJournalEntriesRequest = /** @class */ (function (_super) {
    __extends(GetJournalEntriesRequest, _super);
    function GetJournalEntriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJournalEntriesPathParams)
    ], GetJournalEntriesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJournalEntriesQueryParams)
    ], GetJournalEntriesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJournalEntriesSecurity)
    ], GetJournalEntriesRequest.prototype, "security", void 0);
    return GetJournalEntriesRequest;
}(SpeakeasyBase));
export { GetJournalEntriesRequest };
var GetJournalEntriesResponse = /** @class */ (function (_super) {
    __extends(GetJournalEntriesResponse, _super);
    function GetJournalEntriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetJournalEntriesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetJournalEntriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetJournalEntriesResponse.prototype, "conversationItems", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetJournalEntriesResponse.prototype, "statusCode", void 0);
    return GetJournalEntriesResponse;
}(SpeakeasyBase));
export { GetJournalEntriesResponse };
