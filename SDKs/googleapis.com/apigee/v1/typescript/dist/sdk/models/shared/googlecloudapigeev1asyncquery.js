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
import { GoogleCloudApigeeV1QueryMetadata } from "./googlecloudapigeev1querymetadata";
import { GoogleCloudApigeeV1AsyncQueryResult } from "./googlecloudapigeev1asyncqueryresult";
var GoogleCloudApigeeV1AsyncQuery = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1AsyncQuery, _super);
    function GoogleCloudApigeeV1AsyncQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1AsyncQuery.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=envgroupHostname" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1AsyncQuery.prototype, "envgroupHostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1AsyncQuery.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionTime" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1AsyncQuery.prototype, "executionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1AsyncQuery.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryParams" }),
        __metadata("design:type", GoogleCloudApigeeV1QueryMetadata)
    ], GoogleCloudApigeeV1AsyncQuery.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportDefinitionId" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1AsyncQuery.prototype, "reportDefinitionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", GoogleCloudApigeeV1AsyncQueryResult)
    ], GoogleCloudApigeeV1AsyncQuery.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resultFileSize" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1AsyncQuery.prototype, "resultFileSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resultRows" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1AsyncQuery.prototype, "resultRows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1AsyncQuery.prototype, "self", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1AsyncQuery.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1AsyncQuery.prototype, "updated", void 0);
    return GoogleCloudApigeeV1AsyncQuery;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1AsyncQuery };
