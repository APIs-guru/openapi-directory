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
import { ApplicationPool } from "./applicationpool";
import { WindowsIpTypeEnum } from "./windowsiptypeenum";
import { WindowsSite } from "./windowssite";
var WindowsHostingDetail = /** @class */ (function (_super) {
    __extends(WindowsHostingDetail, _super);
    function WindowsHostingDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actual_size" }),
        __metadata("design:type", Number)
    ], WindowsHostingDetail.prototype, "actualSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=application_pool" }),
        __metadata("design:type", ApplicationPool)
    ], WindowsHostingDetail.prototype, "applicationPool", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain_name" }),
        __metadata("design:type", String)
    ], WindowsHostingDetail.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ftp_username" }),
        __metadata("design:type", String)
    ], WindowsHostingDetail.prototype, "ftpUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], WindowsHostingDetail.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_type" }),
        __metadata("design:type", String)
    ], WindowsHostingDetail.prototype, "ipType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_size" }),
        __metadata("design:type", Number)
    ], WindowsHostingDetail.prototype, "maxSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mssql_database_names" }),
        __metadata("design:type", Array)
    ], WindowsHostingDetail.prototype, "mssqlDatabaseNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servicepack_id" }),
        __metadata("design:type", Number)
    ], WindowsHostingDetail.prototype, "servicepackId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sites", elemType: WindowsSite }),
        __metadata("design:type", Array)
    ], WindowsHostingDetail.prototype, "sites", void 0);
    return WindowsHostingDetail;
}(SpeakeasyBase));
export { WindowsHostingDetail };
