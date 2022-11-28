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
// ReplicationDetails
/**
 * Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other Amazon Web Services accounts and, if so, which accounts.
**/
var ReplicationDetails = /** @class */ (function (_super) {
    __extends(ReplicationDetails, _super);
    function ReplicationDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replicated" }),
        __metadata("design:type", Boolean)
    ], ReplicationDetails.prototype, "replicated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replicatedExternally" }),
        __metadata("design:type", Boolean)
    ], ReplicationDetails.prototype, "replicatedExternally", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replicationAccounts" }),
        __metadata("design:type", Array)
    ], ReplicationDetails.prototype, "replicationAccounts", void 0);
    return ReplicationDetails;
}(SpeakeasyBase));
export { ReplicationDetails };
