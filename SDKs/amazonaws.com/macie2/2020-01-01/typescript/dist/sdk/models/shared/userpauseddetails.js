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
// UserPausedDetails
/**
 * Provides information about when a classification job was paused. For a one-time job, this object also specifies when the job will expire and be cancelled if it isn't resumed. For a recurring job, this object also specifies when the paused job run will expire and be cancelled if it isn't resumed. This object is present only if a job's current status (jobStatus) is USER_PAUSED. The information in this object applies only to a job that was paused while it had a status of RUNNING.
**/
var UserPausedDetails = /** @class */ (function (_super) {
    __extends(UserPausedDetails, _super);
    function UserPausedDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobExpiresAt" }),
        __metadata("design:type", Date)
    ], UserPausedDetails.prototype, "jobExpiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobImminentExpirationHealthEventArn" }),
        __metadata("design:type", String)
    ], UserPausedDetails.prototype, "jobImminentExpirationHealthEventArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobPausedAt" }),
        __metadata("design:type", Date)
    ], UserPausedDetails.prototype, "jobPausedAt", void 0);
    return UserPausedDetails;
}(SpeakeasyBase));
export { UserPausedDetails };
